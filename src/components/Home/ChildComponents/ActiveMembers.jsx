import { Col, ListGroup, Badge } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { memo } from 'react'

const ActiveMembers = ({ Home }) => {
  return (
    <Col
      md={2}
      className="col-right"
      style={{
        position: "absolute",
        top: "70px",
        left: "10px",
        minWidth: "320px",
        textAlign: "left",
      }}
    >
      <ListGroup as="ul">
        {Home.map((post) => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            key={post.id}
          >
            {Math.ceil(Math.random() * 5) % 2 ? (
              <><div className="ms-2 me-auto">
                  <div className="fw-bold active-list-author">
                    <CgProfile /> {post.author}
                  </div>
                </div>
                <Badge bg="success" pill style={{ textAlign: "right" }}>
                  Active
                </Badge>
              </>
            ) : (
              <>
                <div className="ms-2 me-auto">
                  <div className="fw-bold active-list-author is-not-active">
                    <CgProfile /> {post.author}
                  </div>
                </div>
                <Badge bg="danger" pill>
                  Not Active
                </Badge>
              </>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Col>
  );
};

export default memo(ActiveMembers);
