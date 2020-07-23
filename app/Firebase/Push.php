<?php

namespace App\Firebase;

class Push
{

   private $title;
   private $message;
   private $data;


   /**
    * @param $title
    */
   public function setTitle($title)
   {
      $this->title = $title;
   }

   /**
    * @param $message
    */
   public function setMessage($message)
   {
      $this->message = $message;
   }


   /**
    * @param $data
    */
   public function setPayload($data)
   {
      $this->data = $data;
   }


   /**
    * @return array
    */
   public function getPush()
   {
      $data              = array();
      $data['title']     = $this->title;
      $data['body']   = $this->message;
      $data['payload']   = $this->data;
      $data['timestamp'] = date('Y-m-d G:i:s');

      return ['data' => $data, 'notification' => $data];
   }
}
