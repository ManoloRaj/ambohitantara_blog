<?php
defined('BASEPATH') or exit('No direct script access allowed');
require(APPPATH . '/libraries/REST_Controller.php');

class Article_controller_rest extends REST_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('article_model');
    }
    public function articleList_get()
    {
        $data = $this->article_model->getArticleList();
        $this->response($data);
    }
    public function setArticle_post()
    {

        $data = $this->article_model->getArticleList();
        $this->response($data);
    }

}