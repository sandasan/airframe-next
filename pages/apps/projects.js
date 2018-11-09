import React from 'react';
import PropTypes from 'prop-types';

import { 
    Container,
    Row,
    Col
} from './../../components';

import { HeaderMain } from "../../features/HeaderMain";
import { ProjectsList } from '../../features/Projects/ProjectsList';
import { ProjectsGrid } from '../../features/Projects/ProjectsGrid';
import { ProjectsLeftNav } from "../../features/Projects/ProjectsLeftNav";
import { ProjectsSmHeader } from "../../features/Projects/ProjectsSmHeader";

const Projects = (props) => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Projects"
                className="mb-5 mt-4"
            />
            <Row>
                <Col lg={ 3 }>
                    <ProjectsLeftNav />
                </Col>
                <Col lg={ 9 }>
                    <ProjectsSmHeader 
                        subTitle={props.match.params.type === "list"?"Projects List":"Projects Grid"}
                        linkList="/apps/projects/list"
                        linkGrid="/apps/projects/grid"
                    />

                    { 
                        props.match.params.type === "list" ?
                            <ProjectsList /> :
                            <ProjectsGrid />
                    }
                </Col>
            </Row>
        </Container>
    </React.Fragment>
);
Projects.propTypes = {
    match: PropTypes.object.isRequired
};

export default Projects;
