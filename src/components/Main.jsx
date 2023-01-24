import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Search} from "./Search";
import {Container} from "./container";
import Card from "./Card";
import {useDispatch, useSelector} from "react-redux";
import {fetchProjects} from "../redux/slices/projects";

const Wrapper = styled.main`
  width: 100%;
  padding: 2.5rem 2.8rem;
  background-color: var(--color-bg);
  border: 1px solid #DDEDF4;
  border-radius: var(--radi-card);
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0 30px 0;
  justify-content: center;
  gap: 2.6rem;
`;

const Main = () => {
    const dispatch = useDispatch();
    const projects = useSelector(state => state.projects.projects.items);
    const [filteredProjects, setFilteredProjects] = useState(projects);

    useEffect(() => {
        //if(!projects.length);
        dispatch(fetchProjects());
    }, []);

    useEffect(() => {
        //if(!projects.length);
        setFilteredProjects(projects);
    }, [projects]);




    return (
        <Container>
            <Wrapper>
                <Search/>
                <CardsContainer>
                    {filteredProjects.map((project) => {
                        return (
                            <Card key={project.projectId} projectId={project.projectId}
                                  customerName={project.customerName} address={project.address}
                                  rooms={project.rooms} updated_timestmp={project.updated_timestmp}
                                  totalProject={project.totalProject} projectState={project.projectState}
                            />
                        )
                    })}
                </CardsContainer>
            </Wrapper>
        </Container>
    );
};

export default Main;