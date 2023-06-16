import React from 'react';
import { IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/react';
import { SelectBoxProps } from '../types';  // adjust the path to match your file structure

const SelectBox: React.FC<SelectBoxProps> = ({ onCityChange }) => {
  return (
      <IonList>
        <IonItem>
          <IonSelect 
            aria-label="City" 
            interface="popover" 
            placeholder="Choose a city..." 
            onIonChange={e => onCityChange(e.detail.value)}
          >
            <IonSelectOption value="paris">Paris</IonSelectOption>
            <IonSelectOption value="london">London</IonSelectOption>
            <IonSelectOption value="tel-aviv">Tel Aviv</IonSelectOption>
            <IonSelectOption value="sydney">Sydney</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonList>
  );
}

export default SelectBox;


