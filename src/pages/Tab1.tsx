import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import enumera from "../assets/enumera.png"
const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Accueil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Accueil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='container'>
          <img src={enumera} alt="" />
          <p>{"Point d'entrer de l'application"}</p>
        </div>
        <ExploreContainer name="" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
