<?php if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class User_model extends CI_Model
{
    public function getUserList()
    {
        $data =
            $this->db
                ->select("*")
                ->from("user")
                ->get()
                ->result_array();

        return $data;
    }
}

?>