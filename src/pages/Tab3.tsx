import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Challenge</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Challenge</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Exercice, défis, jeux, devoir..." />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
