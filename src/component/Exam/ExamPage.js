import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
const ExamPage = () => {
  return (
    <div>
      <Modal
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="modal-90w"
        show="true"
        animation="true"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Pending Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <Alert variant="success">
            <Alert.Heading>Complete Technical Document Writer Course</Alert.Heading>
            <p>https://developers.google.com/tech-writing
                Complete This COurse
            </p>
          </Alert>
          <Alert variant="success">
            <Alert.Heading>Become Best English Speaker</Alert.Heading>
            <p>I want to become Best English Speaker</p>
          </Alert>
          <Alert variant="success">
            <Alert.Heading>Hands On with  Docker</Alert.Heading>
            <p>
              I want to complete docker course on interleap.co This Course is
              very important for deployment infrastructure on any cloud
            </p>
          </Alert>
          <Alert variant="success">
            <Alert.Heading>Hands On Serverless</Alert.Heading>
            <p>
              I want to complete Serverless course on serverless framework
              official website. This course is very useful for deploy react app
              on AWS using serverless yaml file.
            </p>
          </Alert>
          <Alert variant="success">
            <Alert.Heading>Hands On  Atlantis</Alert.Heading>
            <p>
              I want to complete Atlantis Course it's help for setup atlantis
              cloud.
            </p>
          </Alert>
          <Alert variant="success">
            <Alert.Heading>Hands On with All AWS Services AWS</Alert.Heading>
            <p>I want to Hands On  in AWS.</p>
          </Alert>
          <Alert variant="success">
            <Alert.Heading>Hands On with Terragrunt</Alert.Heading>
            <p>
              TERRAGRUNT is very helpful to keep your terraform code dry
            </p>
          </Alert>
          <Alert variant="success">
            <Alert.Heading>Hands on In Github Action</Alert.Heading>
            <p>I want to complete Nodejs course on Udemy</p>
          </Alert>
          <Alert variant="success">
            <Alert.Heading>Complete React Course</Alert.Heading>
            <p>I want to complete React course on Udemy</p>
          </Alert>
          <Alert variant="success">
            <Alert.Heading>Complete Node.js Course</Alert.Heading>
            <p>I want to complete Nodejs course on Udemy</p>
          </Alert>
           
    
      
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ExamPage;
