# Aufgabe 3 - React Router

Integriere den React Router in die Applikation.

1. Nutze den BrowserRouter um in der App-Komponente die folgenden Routen zu definieren:
   1. `/`, um die `List`-Komponente zu rendern
   2. `/create`, um die `Form`-Komponente zu rendern und damit einen neuen Datensatz zu erzeugen
   3. `/edit/:id`, um die `Form`-Komponente zu rendern und damit einen existierenden Datensatz zu verändern
   4. `*`, um eine Fehlermeldung anzuzeigen
2. Entferne die Formular- und Speicherlogik aus der `List`-Komponente
3. Navigiere mit den New-Button in der `List`-Komponente mit der `useNavigate`-Funktion zur `/create`-Route
4. Navigiere in der `ListItem`-Komponente ebenfalls mit der `useNavigate`-Funktion zur `/edit/:id`-Route
5. Füge die Speicherlogik aus der `usePerson`-Funktion in die `Form`-Komponente ein
6. Wird ein Datensatz editiert, lade die Daten, verwende hierfür eine Kombination aus `useParams` und `useEffect`
7. Nach dem Speichern und beim Abbrechen navigiere zurück zur Liste (`useNavigate`)