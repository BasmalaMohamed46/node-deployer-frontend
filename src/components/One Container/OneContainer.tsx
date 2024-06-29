import { useEffect, useState } from "react";
import { Container, Row, Col, Dropdown, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Repo } from "../../interfaces/repo.interface";
import { DockerContainer } from "../../interfaces/container.interface";
import { getRepos } from "../../services/ReposService";
import {
  stopContainer,
  resumeContainer,
  redeploy,
} from "../../services/ContainerService";
import ContainerWrapper from "../ContainerDashboard/ContainerWrapper";

const OneContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [repo, setRepo] = useState<Repo | null>(null);
  const [container, setContainer] = useState<DockerContainer | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRedeploying, setIsRedeploying] = useState(false);
  const [connectDropdownOpen, setConnectDropdownOpen] = useState(false);
  const [deployDropdownOpen, setDeployDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const repos = await getRepos();
        const matchedRepo = repos.find((repo) =>
          repo.dockerImage?.Containers.some(
            (DockerContainer) => DockerContainer.id === id
          )
        );

        if (matchedRepo) {
          setRepo(matchedRepo);
          const matchedContainer = matchedRepo.dockerImage.Containers.find(
            (dockerContainer) => dockerContainer.id === id
          );
          setContainer(matchedContainer || null);
        }
      } catch (error) {
        console.error("Error fetching repository data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleStopResume = async () => {
    if (!container) return;
    setIsLoading(true);
    try {
      if (container.status === "up") {
        await stopContainer(container.id);
        setContainer({ ...container, status: "stopped" });
      } else {
        await resumeContainer(container.id);
        setContainer({ ...container, status: "up" });
      }
    } catch (error) {
      console.error("Error updating container status:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRedeploy = async () => {
    if (!container) return;
    setContainer({ ...container, status: "stopped" });
    setIsRedeploying(true);
    try {
      await redeploy(container.id);
      setContainer({ ...container, status: "up" }); // Update status to "running" after redeploy
    } catch (error) {
      console.error("Error redeploying container:", error);
    } finally {
      setIsRedeploying(false);
    }
  };

  const toggleConnectDropdown = () =>
    setConnectDropdownOpen((prevOpen) => !prevOpen);
  const toggleDeployDropdown = () =>
    setDeployDropdownOpen((prevOpen) => !prevOpen);

  if (!repo || !container) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col md={8}>
            <div className="d-flex align-items-center">
              <i className="fa fa-globe mr-2"></i>
              <h5 className="mb-0 ms-2">WEB SERVICE</h5>
            </div>
            <h2 className="mt-2">{container.id.slice(0, 12)}</h2>
            <div className="d-flex align-items-center mt-2">
              <span className="badge bg-secondary me-2">
                Node {repo.nodeVersion}
              </span>
              <span className="badge bg-light text-dark">
                {container.tier.name}
              </span>
              <span
                className={`badge ms-2 ${
                  container.status === "up"
                    ? "bg-success text-white"
                    : "bg-danger text-white"
                }`}
              >
                {container.status === "up" ? "Running" : "Stopped"}
              </span>
            </div>
            <div className="d-flex align-items-center mt-2">
              <a href={repo.url} className="me-2">
                <i className="fab fa-github"></i>{" "}
                {repo.url.split("/").pop()?.split(".").shift() ||
                  "Unknown Repo"}
              </a>
              <span>main</span>
            </div>
            <a
              href={"http://" + container.ip + ":" + container.port}
              target="_blank"
              rel="noopener noreferrer"
              className="d-block mt-2 text-decoration-none"
            >
              {"http://" + container.ip + ":" + container.port}{" "}
              <i className="fa fa-external-link-alt"></i>
            </a>
          </Col>
          <Col md={4} className="d-flex justify-content-end align-items-start">
            <Dropdown
              className="me-2"
              show={connectDropdownOpen}
              onToggle={toggleConnectDropdown}
            >
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                Connect
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">{container.ip}</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown show={deployDropdownOpen} onToggle={toggleDeployDropdown}>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                Manual Deploy
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={handleRedeploy}>
                  {isRedeploying ? (
                    <>
                      <Spinner animation="border" size="sm" className="me-2" />
                      Redeploying Container
                    </>
                  ) : (
                    "Redeploy Container"
                  )}
                </Dropdown.Item>
                <Dropdown.Item onClick={handleStopResume}>
                  {isLoading ? (
                    <>
                      <Spinner animation="border" size="sm" className="me-2" />
                      {container.status === "up" ? "Stopping" : "Resuming"}
                    </>
                  ) : container.status === "up" ? (
                    "Stop Container"
                  ) : (
                    "Resume Container"
                  )}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
      <hr />

      <Container className="mt-4">
        <ContainerWrapper />
      </Container>
    </>
  );
};

export default OneContainer;
