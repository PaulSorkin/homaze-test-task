import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Search} from "./Search";
import {Container} from "./container";
import Card from "./Card";
import {useDispatch, useSelector} from "react-redux";
import {fetchProjects} from "../redux/slices/projects";
import Preloader from "./Preloader";

const Wrapper = styled.main`
  width: 100%;
  padding: 2.5rem 2.8rem 3rem 2.8rem;
  background-color: var(--color-bg);
  border: 1px solid #DDEDF4;
  border-radius: var(--radi-card);
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 0 0 0;
  justify-content: center;
  column-gap: 2.6rem;
  row-gap: 2.3rem;
`;

const Main = () => {
    const dispatch = useDispatch();
    const projects = useSelector(state => state.projects.projects.items);
    const isLoading = useSelector(state => state.projects.projects.status === 'loading');
    const [filteredProjects, setFilteredProjects] = useState(projects);

    useEffect(() => {
        if (!projects.length) {
            dispatch(fetchProjects());
        }
    }, []);

    useEffect(() => {
        setFilteredProjects(projects);
    }, [projects]);

    const [search, setSearch] = useState('');

    const handleSearch = (search) => {
        let data = [...projects];
        if (search.length > 1) {
            data = data.filter(p => p.customerName.toLowerCase().includes(search.toLowerCase()) ||
                p.address.toLowerCase().includes(search.toLowerCase()))
        }
        setFilteredProjects(data)
    }
    useEffect(() => {
            handleSearch(search)
        },
        [search])


    return (
        <Container>
            <Wrapper>
                {(isLoading) ? (<Preloader/>) : (
                    <>
                        <Search search={search} setSearch={setSearch}/>
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
                    </>
                )}

            </Wrapper>
        </Container>
    );
};

export default Main;