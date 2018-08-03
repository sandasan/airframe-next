import React from 'react';

import { 
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
    Badge,
    CustomInput,
    UncontrolledButtonDropdown,
    UncontrolledDropdown,
    Form,
    Button,
    FormGroup,
    Label,
    Input,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from './../../components';

import {
    HeaderDemo
} from "../components/HeaderDemo";

const Dropdowns = () => (
    <React.Fragment>
        <Container>
            { /* START Header 1 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={1} 
                        title="Dropdown States" 
                        subTitle={(
                            <React.Fragment>
                                Dropdown component states
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 1 */}
            { /* START Section 1 */}
            <Row>
                { /* START Col6 1 */}
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody style={{ height: '300px' }}>
                            <CardTitle tag="h6">
                                Dropdown: Default
                                <span className="small ml-1 text-muted">
                                    #1.01
                                </span>
                            </CardTitle>
                            <p>
                                Default dropdown menu styling.
                            </p>
                            <ButtonDropdown isOpen>
                                <DropdownToggle caret color="link">
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu persist>
                                    <DropdownItem>Profile</DropdownItem>
                                    <DropdownItem>Settings</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Logout</DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col6 1 */}
                { /* START Col6 1 */}
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody style={{ height: '300px' }}>
                            <CardTitle tag="h6">
                                Dropdown: Active
                                <span className="small ml-1 text-muted">
                                    #1.02
                                </span>
                            </CardTitle>
                            <p>
                                Make the link active with <code>active</code> class.
                            </p>
                            <ButtonDropdown isOpen>
                                <DropdownToggle caret color="link">
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu persist>
                                    <DropdownItem>Profile</DropdownItem>
                                    <DropdownItem>Settings</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem active>Logout</DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col6 1 */}
                { /* START Col6 1 */}
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody style={{ height: '300px' }}>
                            <CardTitle tag="h6">
                                Dropdown: Disabled
                                <span className="small ml-1 text-muted">
                                    #1.03
                                </span>
                            </CardTitle>
                            <p>
                                Disable the link with <code>disabled</code> class.
                            </p>
                            <ButtonDropdown isOpen>
                                <DropdownToggle caret color="link">
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu persist>
                                    <DropdownItem>Profile</DropdownItem>
                                    <DropdownItem disabled>Settings</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Logout</DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col6 1 */}
            </Row>
            { /* END Section 1 */}

            { /* START Header 2 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={2} 
                        title="Dropdown Headers"
                        className="mt-5" 
                        subTitle={(
                            <React.Fragment>
                                Dropdown header with options
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 2 */}
            { /* START Section 2 */}
            <Row>
                { /* START Col6 1 */}
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody style={{ height: '320px' }}>
                            <CardTitle tag="h6">
                                Dropdown: Default Header
                                <span className="small ml-1 text-muted">
                                    #2.01
                                </span>
                            </CardTitle>
                            <p>
                                Basic <code>header</code> styling of label sections.
                            </p>
                            <ButtonDropdown isOpen>
                                <DropdownToggle caret color="link">
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu persist>
                                    <DropdownItem header>Menu</DropdownItem>
                                    <DropdownItem>Profile</DropdownItem>
                                    <DropdownItem>Settings</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Logout</DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody style={{ height: '320px' }}>
                            <CardTitle tag="h6">
                                Dropdown: Header Left Icon
                                <span className="small ml-1 text-muted">
                                    #2.02
                                </span>
                            </CardTitle>
                            <p>
                                Display left/right positioned icons.
                            </p>
                            <ButtonDropdown isOpen>
                                <DropdownToggle caret color="link">
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu persist>
                                    <DropdownItem header>
                                        <i className="fa fa-angle-down mr-2"></i>
                                        Menu
                                    </DropdownItem>
                                    <DropdownItem>Profile</DropdownItem>
                                    <DropdownItem>Settings</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Logout</DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col6 1 */}
                { /* START Col6 2 */}
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody style={{ height: '320px' }}>
                            <CardTitle tag="h6">
                                Dropdown: Header Right Icon
                                <span className="small ml-1 text-muted">
                                    #2.03
                                </span>
                            </CardTitle>
                            <p>
                                Basic <code>header</code> styling of label sections.
                            </p>
                            <ButtonDropdown isOpen>
                                <DropdownToggle caret color="link">
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu persist>
                                    <DropdownItem header className="d-flex">
                                        Menu
                                        <i className="fa fa-angle-down ml-auto"></i>
                                    </DropdownItem>
                                    <DropdownItem>Profile</DropdownItem>
                                    <DropdownItem>Settings</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Logout</DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody style={{ height: '320px' }}>
                            <CardTitle tag="h6">
                                Dropdown: Header Left & Right Icon
                                <span className="small ml-1 text-muted">
                                    #2.04
                                </span>
                            </CardTitle>
                            <p>
                                Display left/right positioned icons
                            </p>
                            <ButtonDropdown isOpen>
                                <DropdownToggle caret color="link">
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu persist>
                                    <DropdownItem header className="d-flex">
                                        <i className="fa fa-gear mr-2"></i>
                                        Menu
                                        <i className="fa fa-angle-down ml-auto"></i>
                                    </DropdownItem>
                                    <DropdownItem>Profile</DropdownItem>
                                    <DropdownItem>Settings</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Logout</DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col6 2 */}
            </Row>
            { /* END Section 2 */}

            { /* START Header 3 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={3} 
                        title="Dropdown Options"
                        className="mt-5" 
                        subTitle={(
                            <React.Fragment>
                                Icons, checkboxes, radios, switches etc.
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 3 */}
            { /* START Section 3 */}
            <Row>
                { /* START Col6 1 */}
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody style={{ height: '320px' }}>
                            <CardTitle tag="h6">
                                Dropdown: Left Icon
                                <span className="small ml-1 text-muted">
                                    #3.01
                                </span>
                            </CardTitle>
                            <p>
                                Dropdown icons in left position.
                            </p>
                            <ButtonDropdown isOpen>
                                <DropdownToggle caret color="link">
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu persist>
                                    <DropdownItem header>Menu</DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-user mr-2"></i>
                                        Profile
                                    </DropdownItem>
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-gear mr-2"></i>
                                        Settings
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <i className="fa fa-fw fa-sign-out mr-2"></i>
                                        Logout
                                    </DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody style={{ height: '320px' }}>
                            <CardTitle tag="h6">
                                Dropdown: Right Icon
                                <span className="small ml-1 text-muted">
                                    #3.02
                                </span>
                            </CardTitle>
                            <p>
                                Dropdown icons in right position.
                            </p>
                            <ButtonDropdown isOpen>
                                <DropdownToggle caret color="link">
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu persist>
                                    <DropdownItem header>Menu</DropdownItem>
                                    <DropdownItem className="d-flex">
                                        Profile
                                        <i className="fa fa-fw fa-user align-self-center ml-auto"></i>
                                    </DropdownItem>
                                    <DropdownItem className="d-flex">
                                        Settings
                                        <i className="fa fa-fw fa-gear align-self-center ml-auto"></i>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem className="d-flex">
                                        Logout
                                        <i className="fa fa-fw fa-sign-out align-self-center ml-auto"></i>
                                    </DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody style={{ height: '320px' }}>
                            <CardTitle tag="h6">
                                Dropdown: Right Badge
                                <span className="small ml-1 text-muted">
                                    #3.03
                                </span>
                            </CardTitle>
                            <p>
                                Dropdown menu items with <code>Badge</code>.
                            </p>
                            <ButtonDropdown isOpen>
                                <DropdownToggle caret color="link">
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu persist>
                                    <DropdownItem header>Menu</DropdownItem>
                                    <DropdownItem className="d-flex">
                                        Profile
                                        <Badge color="primary" className="align-self-center ml-auto">
                                            Done
                                        </Badge>
                                    </DropdownItem>
                                    <DropdownItem className="d-flex">
                                        Settings
                                        <Badge color="danger" className="align-self-center ml-auto">
                                            Error
                                        </Badge>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem className="d-flex">
                                        Logout
                                        <Badge color="success" className="align-self-center ml-auto">
                                            Safe
                                        </Badge>
                                    </DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody style={{ height: '320px' }}>
                            <CardTitle tag="h6">
                                Dropdown: Right Pills
                                <span className="small ml-1 text-muted">
                                    #3.04
                                </span>
                            </CardTitle>
                            <p>
                                Dropdown menu items with <code>Badge pill</code>.
                            </p>
                            <ButtonDropdown isOpen>
                                <DropdownToggle caret color="link">
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu persist>
                                    <DropdownItem header>Menu</DropdownItem>
                                    <DropdownItem className="d-flex">
                                        Profile
                                        <Badge pill color="primary" className="align-self-center ml-auto">
                                            5
                                        </Badge>
                                    </DropdownItem>
                                    <DropdownItem className="d-flex">
                                        Settings
                                        <Badge pill color="danger" className="align-self-center ml-auto">
                                            12
                                        </Badge>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem className="d-flex">
                                        Logout
                                        <Badge pill color="success" className="align-self-center ml-auto">
                                            34
                                        </Badge>
                                    </DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody style={{ height: '320px' }}>
                            <CardTitle tag="h6">
                                Dropdown: Left Badge
                                <span className="small ml-1 text-muted">
                                    #3.05
                                </span>
                            </CardTitle>
                            <p>
                                Dropdown menu items with <code>Badge pill</code>.
                            </p>
                            <ButtonDropdown isOpen>
                                <DropdownToggle caret color="link">
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu persist>
                                    <DropdownItem header>Menu</DropdownItem>
                                    <DropdownItem>
                                        <Badge color="primary" className="mr-2">
                                            Update
                                        </Badge>
                                        Profile
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Badge color="success" className="mr-2">
                                            Ready
                                        </Badge>
                                        Settings
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <Badge color="secondary" className="mr-2">
                                            Added
                                        </Badge>
                                        Logout
                                    </DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col6 1 */}
                { /* START Col6 2 */}
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody style={{ height: '320px' }}>
                            <CardTitle tag="h6">
                                Dropdown: Left Pills
                                <span className="small ml-1 text-muted">
                                    #3.06
                                </span>
                            </CardTitle>
                            <p>
                                Dropdown menu items with <code>Badge pill</code>.
                            </p>
                            <ButtonDropdown isOpen>
                                <DropdownToggle caret color="link">
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu persist>
                                    <DropdownItem header>Menu</DropdownItem>
                                    <DropdownItem>
                                        <Badge pill color="secondary" className="mr-2">
                                            32
                                        </Badge>
                                        Profile
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Badge pill color="secondary" className="mr-2">
                                            86
                                        </Badge>
                                        Settings
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <Badge pill color="secondary" className="mr-2">
                                            11
                                        </Badge>
                                        Logout
                                    </DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody style={{ height: '320px' }}>
                            <CardTitle tag="h6">
                                Dropdown: Right & Left Icons
                                <span className="small ml-1 text-muted">
                                    #3.07
                                </span>
                            </CardTitle>
                            <p>
                                Basic <code>header</code> styling of label sections.
                            </p>
                            <ButtonDropdown isOpen>
                                <DropdownToggle caret color="link">
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu persist>
                                    <DropdownItem header>Menu</DropdownItem>
                                    <DropdownItem className="d-flex">
                                        <i className="fa fa-fw fa-angle-right align-self-center mr-2"></i>
                                        Profile
                                        <i className="fa fa-fw fa-user align-self-center ml-auto"></i>
                                    </DropdownItem>
                                    <DropdownItem className="d-flex">
                                        <i className="fa fa-fw fa-angle-right align-self-center mr-2"></i>
                                        Settings
                                        <i className="fa fa-fw fa-gear align-self-center ml-auto"></i>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem className="d-flex">
                                        <i className="fa fa-fw fa-angle-right align-self-center mr-2"></i>
                                        Logout
                                        <i className="fa fa-fw fa-sign-out align-self-center ml-auto"></i>
                                    </DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody style={{ height: '320px' }}>
                            <CardTitle tag="h6">
                                Dropdown: Left Radios
                                <span className="small ml-1 text-muted">
                                    #3.08
                                </span>
                            </CardTitle>
                            <p>
                                Left positioned <code>radio</code>.
                            </p>
                            <ButtonDropdown isOpen>
                                <DropdownToggle caret color="link">
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu persist>
                                    <DropdownItem header>
                                        Select Style
                                    </DropdownItem>
                                    <DropdownItem>
                                        <CustomInput 
                                            type="radio" 
                                            id="DropdownLeftRadios1" 
                                            name="DropdownLeftRadios" 
                                            label="Minimal" 
                                            checked 
                                        />
                                    </DropdownItem>
                                    <DropdownItem>
                                         <CustomInput 
                                            type="radio" 
                                            id="DropdownLeftRadios2" 
                                            name="DropdownLeftRadios" 
                                            label="Compact" 
                                        />
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <CustomInput 
                                            type="radio" 
                                            id="DropdownLeftRadios3" 
                                            name="DropdownLeftRadios" 
                                            label="Custom..." 
                                        />
                                    </DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody style={{ height: '320px' }}>
                            <CardTitle tag="h6">
                                Dropdown: Left Checkboxes
                                <span className="small ml-1 text-muted">
                                    #3.09
                                </span>
                            </CardTitle>
                            <p>
                                Left positioned <code>checkbox</code>.
                            </p>
                            <ButtonDropdown isOpen>
                                <DropdownToggle caret color="link">
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu persist>
                                    <DropdownItem header>
                                        Select Javascript
                                    </DropdownItem>
                                    <DropdownItem>
                                        <CustomInput 
                                            type="checkbox" 
                                            id="DropdownLeftCheckbox1" 
                                            label="ReactJS" 
                                            checked 
                                        />
                                    </DropdownItem>
                                    <DropdownItem>
                                         <CustomInput 
                                            type="checkbox" 
                                            id="DropdownLeftCheckbox2" 
                                            label="Angular" 
                                        />
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <CustomInput 
                                            type="checkbox" 
                                            id="DropdownLeftCheckbox3"  
                                            label="Other..." 
                                        />
                                    </DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardBody style={{ height: '390px' }}>
                            <CardTitle tag="h6">
                                Dropdown: Forms 
                                <span className="small ml-1 text-muted">
                                    #3.10
                                </span>
                            </CardTitle>
                            <p>
                                with Buttons, Inputs and Checkbox.
                            </p>
                            <ButtonDropdown isOpen>
                                <DropdownToggle caret color="link">
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu persist className="p-4">
                                     <Form>
                                        <FormGroup>
                                            <Label for="emailAdress">Email Adress</Label>
                                            <Input type="email" name="email" id="emailAdress" placeholder="email@example.com" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="password">Password</Label>
                                            <Input type="password" name="password" id="password" placeholder="Password..." />
                                        </FormGroup>
                                        <FormGroup>
                                            <CustomInput type="checkbox" id="RememberMe" label="Remember Me" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Button color="primary">Sign In</Button>{' '}
                                        </FormGroup>
                                     </Form>

                                </DropdownMenu>
                            </ButtonDropdown>
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col6 2 */}
            </Row>
            { /* END Section 3 */}

            { /* START Header 4 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={4} 
                        title="Dropdown Directions"
                        className="mt-5" 
                        subTitle={(
                            <React.Fragment>
                                Positions are available for: <code>&lt;Dropdown direction="left" /&gt;</code>, 
                                <code>&lt;Dropdown direction="right" /&gt;</code> and <code>&lt;Dropdown direction="up" /&gt;</code>.
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 4 */}
            { /* START Section 4 */}
            <Row>
                { /* START Col6 1 */}
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                 Dropdown: Dropup
                                <span className="small ml-1 text-muted">
                                    #4.01
                                </span>
                            </CardTitle>
                            <p>
                                Trigger dropdown menus above elements by adding 
                                <code>&lt;Dropdown direction="up" /&gt;</code> 
                                to the parent element.
                            </p>
                            <UncontrolledButtonDropdown direction="up">
                                <DropdownToggle color="secondary" outline caret>
                                    See Demo
                                </DropdownToggle>
                                <DropdownMenu persist>
                                    <DropdownItem header>Menu</DropdownItem>
                                    <DropdownItem>Profile</DropdownItem>
                                    <DropdownItem>Settings</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Logout</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col6 1 */}
                { /* START Col6 1 */}
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                 Dropdown: Dropleft
                                <span className="small ml-1 text-muted">
                                    #4.03
                                </span>
                            </CardTitle>
                            <p>
                                Trigger dropdown menus above elements by adding 
                                <code>&lt;Dropdown direction="left" /&gt;</code> 
                                to the parent element.
                            </p>
                            <UncontrolledButtonDropdown direction="left">
                                <DropdownToggle color="secondary" outline caret>
                                    See Demo
                                </DropdownToggle>
                                <DropdownMenu persist>
                                    <DropdownItem header>Menu</DropdownItem>
                                    <DropdownItem>Profile</DropdownItem>
                                    <DropdownItem>Settings</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Logout</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col6 1 */}
                { /* START Col6 1 */}
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                 Dropdown: Dropright
                                <span className="small ml-1 text-muted">
                                    #4.02
                                </span>
                            </CardTitle>
                            <p>
                                Trigger dropdown menus above elements by adding 
                                <code>&lt;Dropdown direction="right" /&gt;</code> 
                                to the parent element.
                            </p>
                            <UncontrolledButtonDropdown direction="right">
                                <DropdownToggle color="secondary" outline caret>
                                    See Demo
                                </DropdownToggle>
                                <DropdownMenu persist>
                                    <DropdownItem header>Menu</DropdownItem>
                                    <DropdownItem>Profile</DropdownItem>
                                    <DropdownItem>Settings</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Logout</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col6 1 */}
            </Row>
            { /* END Section 4 */}

            { /* START Header 5 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={5} 
                        title="Dropdown Custom"
                        className="mt-5" 
                        subTitle={(
                            <React.Fragment>
                                Dropdown as combo with Lists, Buttons, Input and Media...
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 5 */}
            { /* START Section 5 */}
            <Row>
                { /* START Col6 1 */}
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Dropdown: List Group (as Links)
                                <span className="small ml-1 text-muted">
                                    #5.01
                                </span>
                            </CardTitle>
                            <p>
                                <i>TO-DO...</i>
                            </p>
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col6 1 */}
                { /* START Col6 1 */}
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Dropdown: List Group (as Buttons) 
                                <span className="small ml-1 text-muted">
                                    #5.02
                                </span>
                            </CardTitle>
                            <p>
                                <i>TO-DO...</i>
                            </p>
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col6 1 */}
                { /* START Col6 1 */}
                <Col lg={ 6 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Dropdown: List Group
                                <span className="small ml-1 text-muted">
                                    #5.03
                                </span>
                            </CardTitle>
                            <p>
                                <i>TO-DO...</i>
                            </p>
                        </CardBody>
                    </Card>
                </Col>
                { /* END Col6 1 */}
            </Row>
            { /* END Section 5 */}
        </Container>
    </React.Fragment>
);

export default Dropdowns;