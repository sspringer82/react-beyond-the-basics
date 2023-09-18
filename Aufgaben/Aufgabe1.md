# Aufgabe 1 - Context

Erzeuge einen Kontext für die Verwaltung der Personendaten.

1. Erzeuge eine Datei mit dem Namen `PersonProvider.tsx`
2. Definiere den Kontextyp (orientiert sich an der State-Struktur von React)
3. Erzeuge den PersonContext mit der `createContext`-Funktion
4. Erzeuge die PersonProvider-Komponente, die den `PersonContext.Provider` zurückgibt und diesen mit einem `value` versieht
5. Binde den `PersonProvider` in die `App`-Komponente ein
6. Verwende in der `List`-Komponente den `PersonContext` statt einem lokalen State.
   
Optional: Erzeuge eine Funktion `usePersonContext`, die mit useContext auf den `PersonContext` zugreift, ist dieser null, wirft sie eine Exception