import { Col, ListGroup, Badge } from "react-bootstrap";
import DummyChat from '../../Assets/DummyChat.json'
import Post from '../../Assets/Posts.json'

const ChatList = () => {
  return (
    <Col md={2} className="col-left" style={{position: "fixed", top: '70px' , right: '30px', minWidth: '320px'}}>
      <ListGroup as="ol" numbered>
        {Post.map((post,index) => (
          <ListGroup.Item
            as="li"
            key={index}
            className="d-flex justify-content-between align-items-start chat-list"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{post.author}</div>
              {DummyChat[Math.ceil(Math.random() * 6)].message}
            </div>
            <Badge bg="primary" pill>
              {DummyChat[Math.ceil(Math.random() * 6)].messageCount * Math.ceil(Math.random() * 6)}
            </Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Col>
  );
};

export default ChatList;
