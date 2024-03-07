import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mes cours</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Mes cours</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Matières, Cours, Vidéos, Audio...." />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
