import MDBox from "components/MDBox";
import PageLayout from "examples/LayoutContainers/PageLayout";
import PropTypes from "prop-types";

function TesLayout({ children }) {
  return (
    <PageLayout>
      <MDBox px={1} width="100%" height="100vh" mx="auto">
        {children}
      </MDBox>
    </PageLayout>
  );
}

TesLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TesLayout;
