//snippet rce
import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

export class CharacterCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    let {
      my_id,
      name,
      gender,
      culture,
      born,
      aliases,
      character_image,
      father,
      mother,
      spouse
    } = this.props.character;
    return (
      <div>
        <Table bordered size="sm">
          <thead>
            <tr>
              <th>
                <center>ID</center>
              </th>
              <th>
                <center>Profile</center>
              </th>
              <th>
                <center>Gender</center>
              </th>
              <th>
                <center>Culture</center>
              </th>
              <th>
                <center>Aliases</center>
              </th>

              <th>
                <center>Action</center>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: '20px' }}>{my_id}</td>
              <td style={{ width: '200px' }}>
                <Card style={{ width: '200px', height: '90%' }}>
                  <CardImg
                    onClick={this.toggle}
                    top
                    width="100%"
                    src={character_image}
                  />
                  <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardSubtitle style={{ color: '#00e600' }}>
                      Born
                    </CardSubtitle>
                    <CardText>{born}</CardText>
                  </CardBody>
                </Card>
              </td>
              <td style={{ width: '100px' }}>{gender}</td>
              <td style={{ width: '200px' }}>{culture}</td>

              <td style={{ width: '500px' }}>{aliases}</td>

              <td>
                {' '}
                <Button
                  color="danger"
                  onClick={() => this.props.removeCharacter(my_id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>

          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>
              <span style={{ color: 'orange' }}>{name}</span> Aliases
            </ModalHeader>
            <ModalBody>
              <div class="row">
                <Col sm="4" />
                <Col sm="4">
                  <img
                    style={{ marginLeft: '-30px' }}
                    width="200px"
                    height="200px"
                    src={character_image}
                  />
                </Col>
                <Col sm="4" />

                <Col sm="12">
                  <ListGroup style={{ marginLeft: '10px' }}>
                    <ListGroupItem>
                      <b>Aliases</b>
                    </ListGroupItem>
                    <ListGroupItem
                      style={{
                        fontSize: '12px',
                        textAlign: 'left',
                        height: '100px'
                      }}
                    >
                      {aliases}
                    </ListGroupItem>
                  </ListGroup>
                </Col>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggle}>
                Back
              </Button>
            </ModalFooter>
          </Modal>
        </Table>
      </div>
    );
  }
}

export default CharacterCard;
