import React, { useEffect } from 'react';

import Layout from '../../components/Layout/Layout';

const AdminIndexPage = (props) => {
  useEffect(() => {

  }, []);

  return (
    <Layout disablePaddingBottom>
      <div style={{height: '100px', padding: '25px', fontSize: '30px', fontWeight: 'bold'}}>
        Admin
      </div>
    </Layout>
  );
};

export default AdminIndexPage;
