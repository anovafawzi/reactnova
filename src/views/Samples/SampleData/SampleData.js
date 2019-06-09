import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

// load sample data hooks
import { useSampleData } from '../../../hooks';

const SampleData = () => {
  const [url, setUrl] = useState('');
  const [sampleData, getSampleData] = useSampleData();

  useEffect(() => {
    getSampleData(url);
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
                    sampleData && sampleData.data.results.map((item, index) => (
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
                {sampleData && (sampleData.data.previous !== null) && <PaginationItem><PaginationLink previous tag="button" onClick={() => setUrl(sampleData.data.previous)}>Prev</PaginationLink></PaginationItem>}
                {/* <PaginationItem active>
                  <PaginationLink tag="button">1</PaginationLink>
                </PaginationItem>
                <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem> */}
                {sampleData && (sampleData.data.next !== null) && <PaginationItem><PaginationLink next tag="button" onClick={() => setUrl(sampleData.data.next)}>Next</PaginationLink></PaginationItem>}
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
                    sampleData && sampleData.data.results.map((item, index) => (
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
                  {sampleData && (sampleData.data.previous !== null) && <PaginationItem><PaginationLink previous tag="button" onClick={() => setUrl(sampleData.data.previous)}>Prev</PaginationLink></PaginationItem>}
                  {/* <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem> */}
                  {sampleData && (sampleData.data.next !== null) && <PaginationItem><PaginationLink next tag="button" onClick={() => setUrl(sampleData.data.next)}>Next</PaginationLink></PaginationItem>}
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
