import React, { useEffect } from 'react';
import { companyId } from './api';
import { getCompanyThunk } from './redux/actions/company-actions';
import { useAppDispatch, useAppSelector } from './services/hooks';
import CommonInformation from './components/common-information/common-information';
import Contacts from './components/contacts/contacts';
import PhotosSection from './components/photos-section/photos-section';

import './app.scss';

import Header from './components/header/header';
import Aside from './components/aside/aside';
import Footer from './components/footer/footer';
import DeleteModal from './components/delete-modal/delete-modal';
import ShortNameSection from './components/short-name-section/short-name-section';

function App() {
  const dispatch = useAppDispatch();
  const { isDeleteModal } = useAppSelector((store) => store.appState);

  useEffect(() => {
    dispatch(getCompanyThunk(companyId));
  }, []);

  return (
    <div className="wrapper">
      <main>
        <Aside />
        <div className="content-wrapper">
          <Header />
          <div className="information">
            <ShortNameSection />
            <CommonInformation />
            <Contacts />
            <PhotosSection />
          </div>
        </div>
      </main>
      <Footer/>
      {isDeleteModal && <DeleteModal />}
    </div>
  );
}

export default App;
