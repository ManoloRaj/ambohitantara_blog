<?php if (!defined('BASEPATH'))
	exit('No direct script access allowed');
error_reporting(E_ALL);

class Welcome extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();

		$this->load->model('user_model');

	}

	public function index()
	{
		$data = $this->user_model->getUserList();
		//print_r($data);
		$this->load->view(
			'welcome_message',
			array(
				"donnee" => $data
			)
		);
	}

}

?>