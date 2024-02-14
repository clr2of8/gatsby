import React, { useRef } from 'react';

import Layout from '../../../components/Layout/Layout';

const AboutPage = (props) => {

  const secretFlag = 'flag{yyyy}'

  return (
    <Layout disablePaddingBottom>
      <div style={{height: '100px', padding: '25px', fontSize: '30px', fontWeight: 'bold'}}>
        {secretFlag}
      </div>
    </Layout>
  );
};

export default AboutPage;
