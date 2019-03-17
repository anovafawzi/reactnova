import React, { useState, useContext, useEffect } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

import AppContext from '../../../context/AppContext';

const SampleData = () => {
  const context = useContext(AppContext);
  const [url, setUrl] = useState('');

  useEffect(() => {
    context.getSampleData(url);
  }, [url]);

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" lg="12">
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i> Striped Table
            </CardHeader>
            <CardBody>
              <Table responsive striped>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Eye color</th>
                    <th>Gender</th>
                    <th>Height</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    context.sampleData && context.sampleData.data.results.map((item, index) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.eye_color}</td>
                        <td>{item.gender}</td>
                        <td>{item.height}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </Table>
              <Pagination>
                {context.sampleData && (context.sampleData.data.previous !== null) && <PaginationItem><PaginationLink previous tag="button" onClick={() => setUrl(context.sampleData.data.previous)}>Prev</PaginationLink></PaginationItem>}
                {/* <PaginationItem active>
                  <PaginationLink tag="button">1</PaginationLink>
                </PaginationItem>
                <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem> */}
                {context.sampleData && (context.sampleData.data.next !== null) && <PaginationItem><PaginationLink next tag="button" onClick={() => setUrl(context.sampleData.data.next)}>Next</PaginationLink></PaginationItem>}
              </Pagination>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i> Combined All Table
            </CardHeader>
            <CardBody>
              <Table hover bordered striped responsive size="sm">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Eye color</th>
                    <th>Gender</th>
                    <th>Height</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    context.sampleData && context.sampleData.data.results.map((item, index) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.eye_color}</td>
                        <td>{item.gender}</td>
                        <td>{item.height}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </Table>
              <nav>
                <Pagination>
                  {context.sampleData && (context.sampleData.data.previous !== null) && <PaginationItem><PaginationLink previous tag="button" onClick={() => setUrl(context.sampleData.data.previous)}>Prev</PaginationLink></PaginationItem>}
                  {/* <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem> */}
                  {context.sampleData && (context.sampleData.data.next !== null) && <PaginationItem><PaginationLink next tag="button" onClick={() => setUrl(context.sampleData.data.next)}>Next</PaginationLink></PaginationItem>}
                </Pagination>
              </nav>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>

  );
}

export default SampleData;
