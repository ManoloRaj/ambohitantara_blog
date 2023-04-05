<?php if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Article_model extends CI_Model
{
    public function getArticleList()
    {
        $data =
            $this->db
                ->select("*")
                ->from("article")
                ->get()
                ->result_array();

        return $data;
    }

}

?>