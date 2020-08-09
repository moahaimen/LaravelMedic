<?php

namespace App\Firebase;

use Illuminate\Support\Facades\Log;

class Firebase
{
    /**    * Sending push message to single user by Firebase Registration ID   
     * @param $to
     * @param $message
     *
     *  @return bool|string    
     **/
    public function send($to, $message)
    {
        $fields = array(
            'to'   => $to,
            'notification' => $message,
        );
        return $this->sendPushNotification($fields);
    }

    /**    
     * Sending message to a topic by topic name    
     * @param $to 
     * @param $message 
     *  
     * @return bool|string    
     */
    public function sendToTopic($to, $message)
    {
        $fields = array(
            'to' => '/topics/' . $to,
            'notification' => $message['notification'],
            'data' => $message['data']
        );
        return $this->sendPushNotification($fields);
    }

    /**   
     * Sending push message to multiple users by firebase registration ids   
     * @param $registration_ids   
     * @param $message 
     *  
     *  @return bool|string  
     */
    public function sendMultiple($registration_ids, $message)
    {
        $fields = array(
            'to'   => $registration_ids,
            'notification' => $message,
        );

        return $this->sendPushNotification($fields);
    }

    /**   
     *  CURL request to firebase servers
     *  @param $fields   
     *   
     *  @return bool|string   
     */
    private function sendPushNotification($fields)
    {
        $serverKey = 'AAAA-AllDOs:APA91bGADRY1-bBaIiN1ZVK_sguwPftEIam1VvsGGZeesAr-sBg9rA8swxEsEyw9QwtLGL9OlYUovAaw71sijK2xCEeycteM0EnwiSOfA1EipTRMzn1sxq1SUbqpuRQ1lEWRwgTSVomL';

        // Set POST variables      
        $url = 'https://fcm.googleapis.com/fcm/send';
        $headers = array(
            'Authorization: key=' . $serverKey,
            'Content-Type: application/json',
            'Accept: application/json',
        );

        // Open connection
        $ch = curl_init();
        // Set the url, number of POST vars, POST data      
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        // Disabling SSL Certificate support temporarly    
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));

        // Execute post    
        $result = curl_exec($ch);
        if ($result === false) {
            die('Curl failed: ' . curl_error($ch));
        }
        // Close connection    
        curl_close($ch);
        return $result;
    }
}
