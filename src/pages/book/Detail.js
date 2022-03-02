import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const Detail = (props) => {
  const id = useParams().id;

  const navigate = useNavigate();
  const [book, setBook] = useState({
    id: "",
    title: "",
    author: "",
  });

  useEffect(() => {
    axios.get(`/book/${id}`).then((res) => {
      setBook(res.data);
    });
  }, []);

  const deleteBook = () => {
    axios
      .delete(`/book/${id}`)
      .then((res) => navigate("/"))
      .catch((error) => console.log(error));
  };
  const updateBook = () => {
    navigate(`/updateForm/${id}`);
  };
  return (
    <div>
      <h1>책 상세보기</h1>
      <Button variant="warning" onClick={updateBook}>
        수정삭제해aaa222342234234
      </Button>
      <Button variant="warning" onClick={deleteBook}>
        삭제
      </Button>
      <hr />
      <h3>{book.author}</h3>
      <h3>{book.title}</h3>
    </div>
  );
};

export default Detail;
