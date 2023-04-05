<?php
defined('BASEPATH') or exit('No direct script access allowed');
require(APPPATH . '/libraries/REST_Controller.php');

class User_controller_rest extends REST_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('user_model');
    }
    public function userListe_get()
    {
        $data = $this->user_model->getUserList();
        $this->response($data);
    }

}