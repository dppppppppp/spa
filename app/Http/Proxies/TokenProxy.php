<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/10/20 0020
 * Time: 下午 3:02
 */

namespace App\Http\Proxies;


use GuzzleHttp\Client;

class TokenProxy
{
    protected $http;

    /**
     * TokenProxy constructor.
     * @param $http
     */
    public function __construct(Client $http)
    {
        $this->http = $http;
    }

    public function login($username, $password)
    {
        if (auth()->attempt(['email' => $username, 'password' => $password, 'is_active' => 1])) {
            return $this->proxy('password', [
                'username' => $username,
                'password' => $password,
                'scope'    => '',
            ]);
        }

        return response()->json(['status' => false, 'msg' => 'Credentials not match']);
    }

    public function proxy($grant_type, array $data = [])
    {
        $data = array_merge($data, [
            'grant_type'    => $grant_type,
            'client_id'     => env('CLIENT_ID'),
            'client_secret' => env('CLIENT_SECRET'),
        ]);
        $uri = url('oauth/token');
        $response = $this->http->request('POST', $uri, ['form_params' => $data]);

        $token = json_decode($response->getBody());

        return response()->json([
            'expires_in'=>$token->expires_in,
            'access_token'=>$token->access_token,
            'refresh_token'=>$token->refresh_token
        ])->cookie('refresh_token',$token->refresh_token);
    }
}