                    <Form className="form-horizontal">
                      <Row>
                        <Col xs="12">
                          <FormGroup>
                            <Label htmlFor="name">Simple password</Label>
                            <PasswordInput invalid id="passwordExample" name="passwordExample" placeholder="Enter password" required />
                            <div className="invalid-field">Houston, we have a problem...</div>
                            {/* <FormFeedback>Houston, we have a problem...</FormFeedback> */}
                            {/* OR USE THIS <div className="invalid-field">Houston, we have a problem...</div> */}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup>
                            <Label htmlFor="name">Simple textbox</Label>
                            <Input invalid type="text" id="name" placeholder="Enter your name" required />
                            <FormFeedback>Houston, we have a problem...</FormFeedback>
                            {/* OR USE THIS <div className="invalid-field">Houston, we have a problem...</div> */}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup row>
                            <Col md="12">
                              <Label htmlFor="name">Simple textbox with prepended and appended icon</Label>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="fa fa-euro"></i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input invalid type="text" id="input3-group1" name="input3-group1" placeholder=".." />
                                <InputGroupAddon addonType="append">
                                  <InputGroupText>.00</InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                              <div className="help-block invalid-field">Please provide a valid information</div>
                            </Col>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup>
                            <Label htmlFor="name">Number textbox</Label>
                            <NumberFormat
                              className={'is-invalid form-control'}
                              value={2323.423}
                              displayType={'input'}
                              allowNegative={true}
                              disabled={false}
                              decimalScale={3}
                              // isNumericString={true}
                              prefix={'$'}
                              decimalSeparator={','}
                              thousandSeparator={'.'}
                              readOnly={false}
                              onValueChange={values => {
                                  console.log(values);
                              }}
                            />
                            <FormFeedback>Houston, we have a problem...</FormFeedback>
                            {/* OR USE THIS <div className="invalid-field">Houston, we have a problem...</div> */}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup row>
                            <Col md="12">
                              <Label htmlFor="name">Number textbox with prepended and appended icon</Label>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="fa fa-euro"></i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <NumberFormat
                                  className={'is-invalid form-control'}
                                  value={2323}
                                  displayType={'input'}
                                  allowNegative={true}
                                  disabled={false}
                                  decimalScale={0}
                                  // isNumericString={true}
                                  // prefix={'$'}
                                  decimalSeparator={','}
                                  thousandSeparator={'.'}
                                  readOnly={false}
                                  onValueChange={values => {
                                      console.log(values);
                                  }}
                                />
                                <InputGroupAddon addonType="append">
                                  <InputGroupText>.00</InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                              <div className="help-block invalid-field">Please provide a valid information</div>
                            </Col>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup>
                            <Label htmlFor="name">Datetime picker</Label>
                            <Datetime
                              inputProps={{ name: 'date-name-prop', className: 'form-control is-invalid' }}
                              value={moment('01/07/2019')}
                              // className={touched ? (error ? 'is-invalid' : '') : ''}
                              onChange={param =>
                                  console.log(param)
                              }
                              dateFormat={'DD/MM/YYYY'}
                              timeFormat={null}
                              // isValidDate={setValidDate}
                              // defaultValue={setDefaultValue}
                            />
                            <div className="invalid-field">Houston, we have a problem...</div>
                            {/* OR USE THIS <div className="invalid-field">Houston, we have a problem...</div> */}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup row>
                            <Col md="12">
                              <Label htmlFor="name">Datetime picker with prepended and appended icon</Label>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="fa fa-calendar"></i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Datetime
                                  inputProps={{ name: 'date-name-prop', className: 'form-control is-invalid' }}
                                  value={moment('01/07/2019')}
                                  // className={touched ? (error ? 'is-invalid' : '') : ''}
                                  className={'rdt-datefield'}
                                  onChange={param =>
                                      console.log(param)
                                  }
                                  dateFormat={'DD/MM/YYYY'}
                                  timeFormat={null}
                                  // isValidDate={setValidDate}
                                  // defaultValue={setDefaultValue}
                                />
                                {/* <InputGroupAddon addonType="append">
                                  <InputGroupText>.00</InputGroupText>
                                </InputGroupAddon> */}
                              </InputGroup>
                              <div className="help-block invalid-field">Please provide a valid information</div>
                            </Col>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup>
                            <Label htmlFor="name">Time picker</Label>
                            <Datetime
                              inputProps={{ name: 'date-name-prop', className: 'form-control is-invalid' }}
                              value={moment('11:59:35', 'HH:mm:ss')}
                              // className={touched ? (error ? 'is-invalid' : '') : ''}
                              onChange={param =>
                                  console.log(param)
                              }
                              dateFormat={false}
                              timeFormat={'HH:mm ss'}
                              // isValidDate={setValidDate}
                              // defaultValue={setDefaultValue}
                            />
                            <div className="invalid-field">Houston, we have a problem...</div>
                            {/* OR USE THIS <div className="invalid-field">Houston, we have a problem...</div> */}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup row>
                            <Col md="12">
                              <Label htmlFor="name">Time picker with prepended and appended icon</Label>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="fa fa-clock-o"></i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Datetime
                                  inputProps={{ name: 'date-name-prop', className: 'form-control is-invalid' }}
                                  value={moment('11:59:35', 'HH:mm:ss')}
                                  // className={touched ? (error ? 'is-invalid' : '') : ''}
                                  className={'rdt-datefield'}
                                  onChange={param =>
                                      console.log(param)
                                  }
                                  dateFormat={false}
                                  timeFormat={'HH:mm ss'}
                                  // isValidDate={setValidDate}
                                  // defaultValue={setDefaultValue}
                                />
                                {/* <InputGroupAddon addonType="append">
                                  <InputGroupText>.00</InputGroupText>
                                </InputGroupAddon> */}
                              </InputGroup>
                              <div className="help-block invalid-field">Please provide a valid information</div>
                            </Col>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup>
                            <Label htmlFor="name">Date range picker</Label>
                            <br/>
                            <div className="drp-invalid-field">
                              <DateRangePicker
                                startDate={reactDatesDate.startDate} // momentPropTypes.momentObj or null,
                                endDate={reactDatesDate.endDate} // momentPropTypes.momentObj or null,
                                startDateId="myDateRangePickerStartId" // PropTypes.string.isRequired,
                                endDateId="myDateRangePickerEndId" // PropTypes.string.isRequired,
                                onDatesChange={({ startDate, endDate }) => {
                                  setReactDatesDate({
                                    startDate,
                                    endDate,
                                  })
                                }} // PropTypes.func.isRequired,
                                onFocusChange={newFocusedInput => setFocusedInput(newFocusedInput)} // PropTypes.func.isRequired,
                                focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                displayFormat={'DD/MM/YYYY'}
                              />
                            </div>
                            <div className="invalid-field">Houston, we have a problem...</div>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup>
                            <Label htmlFor="name">Select (searchable, multi value)</Label>
                            <Select
                              classNamePrefix={'invalid-field'}
                              value={selectedOption}
                              onChange={handleSelectChange}
                              options={options}
                              isMulti
                              isClearable
                              isSearchable
                              // theme={(theme) => ({
                              //   ...theme,
                              //   borderRadius: 0,
                              //   colors: {
                              //   ...theme.colors,
                              //     neutral50: 'hotpink',
                              //   },
                              // })}
                            />
                            <div className="invalid-field">Houston, we have a problem...</div>
                            {/* OR USE THIS <div className="invalid-field">Houston, we have a problem...</div> */}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup row>
                            <Col md="12">
                              <Label htmlFor="name">Select (searchable, multi value) with prepended and appended icon</Label>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="fa fa-clock-o"></i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Select
                                  className={'rs-group'}
                                  classNamePrefix={'invalid-field'}
                                  value={selectedOption}
                                  onChange={handleSelectChange}
                                  options={options}
                                  isMulti
                                  isClearable
                                  isSearchable
                                  // theme={(theme) => ({
                                  //   ...theme,
                                  //   borderRadius: 0,
                                  //   colors: {
                                  //   ...theme.colors,
                                  //     neutral50: 'hotpink',
                                  //   },
                                  // })}
                                />
                                <InputGroupAddon addonType="append">
                                  <InputGroupText>.00</InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                              <div className="help-block invalid-field">Please provide a valid information</div>
                            </Col>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup>
                            <Label htmlFor="name">Autocomplete</Label>
                            <Select
                              classNamePrefix={'invalid-field'}
                              value={selectedOption}
                              onChange={handleSelectChange}
                              options={options}
                              isSearchable
                              // theme={(theme) => ({
                              //   ...theme,
                              //   borderRadius: 0,
                              //   colors: {
                              //   ...theme.colors,
                              //     neutral50: 'hotpink',
                              //   },
                              // })}
                            />
                            <div className="invalid-field">Houston, we have a problem...</div>
                            {/* OR USE THIS <div className="invalid-field">Houston, we have a problem...</div> */}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup row>
                            <Col md="12">
                              <Label htmlFor="name">Autocomplete with prepended and appended icon</Label>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="fa fa-clock-o"></i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Select
                                  className={'rs-group'}
                                  classNamePrefix={'invalid-field'}
                                  value={selectedOption}
                                  onChange={handleSelectChange}
                                  options={options}
                                  isSearchable
                                  // theme={(theme) => ({
                                  //   ...theme,
                                  //   borderRadius: 0,
                                  //   colors: {
                                  //   ...theme.colors,
                                  //     neutral50: 'hotpink',
                                  //   },
                                  // })}
                                />
                                <InputGroupAddon addonType="append">
                                  <InputGroupText>.00</InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                              <div className="help-block invalid-field">Please provide a valid information</div>
                            </Col>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup row>
                            <Col md="2">
                              <AppSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked label dataOn={'\u2713'} dataOff={'\u2715'} />
                            </Col>
                            <Col md="10">
                              <Label htmlFor="name">Switch</Label>
                            </Col>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup check inline>
                            <Input className="form-check-input form-checkbox" type="checkbox" id="inline-checkbox1" name="inline-checkbox1" value="option1" />
                            <Label className="form-check-label" check htmlFor="inline-checkbox1">Checkbox example</Label>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup check inline>
                            <Input className="form-check-input form-checkbox" type="checkbox" id="inline-checkbox1" name="inline-checkbox1" value="option1" disabled />
                            <Label className="form-check-label" check htmlFor="inline-checkbox1">Checkbox example</Label>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup check inline>
                            <Input className="form-check-input form-radio" type="radio" id="inline-radio1" name="inline-radio1" value="option2" />
                            <Label className="form-check-label" check htmlFor="inline-radio1">Radio example</Label>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <FormGroup check inline>
                            <Input className="form-check-input form-radio" type="radio" id="inline-radio1" name="inline-radio1" value="option2" disabled />
                            <Label className="form-check-label" check htmlFor="inline-radio1">Radio example</Label>
                          </FormGroup>
                        </Col>
                      </Row>

                      {/* <FormGroup>
                        <Label htmlFor="prependedInput">Prepended text</Label>
                        <div className="controls">
                          <InputGroup className="input-prepend">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>@</InputGroupText>
                            </InputGroupAddon>
                            <Input id="prependedInput" size="16" type="text" />
                          </InputGroup>
                          <p className="help-block">Here's some help text</p>
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="appendedInput">Appended text</Label>
                        <div className="controls">
                          <InputGroup>
                            <Input id="appendedInput" size="16" type="text" />
                            <InputGroupAddon addonType="append">
                              <InputGroupText>.00</InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                          <span className="help-block">Here's more help text</span>
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="appendedPrependedInput">Append and prepend</Label>
                        <div className="controls">
                          <InputGroup className="input-prepend">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>$</InputGroupText>
                            </InputGroupAddon>
                            <Input id="appendedPrependedInput" size="16" type="text" />
                            <InputGroupAddon addonType="append">
                              <InputGroupText>.00</InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="appendedInputButton">Append with button</Label>
                        <div className="controls">
                          <InputGroup>
                            <Input id="appendedInputButton" size="16" type="text" />
                            <InputGroupAddon addonType="append">
                              <Button color="secondary">Go!</Button>
                            </InputGroupAddon>
                          </InputGroup>
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="appendedInputButtons">Two-button append</Label>
                        <div className="controls">
                          <InputGroup>
                            <Input id="appendedInputButtons" size="16" type="text" />
                            <InputGroupAddon addonType="append">
                              <Button color="secondary">Search</Button>
                              <Button color="secondary">Options</Button>
                            </InputGroupAddon>
                          </InputGroup>
                        </div>
                      </FormGroup> */}
                      <div className="form-actions">
                        <Button type="submit" color="primary">Save changes</Button>
                        &nbsp;
                        <Button color="secondary">Cancel</Button>
                      </div>
                    </Form>
