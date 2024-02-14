import React, { useEffect } from 'react';
import Layout from "../../../components/Layout";

const HiddenIndexPage = (props) => {
  useEffect(() => {

  }, []);

  return (
    <Layout disablePaddingBottom>
      <div style={{height: '100px', padding: '25px', fontSize: '30px', fontWeight: 'bold'}}>
        Hidden
      </div>
    </Layout>
  );
};

export default HiddenIndexPage;
