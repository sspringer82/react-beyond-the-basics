# Aufgabe 5 - React Query

Nutze React Query in der `List`-Komponente, um die Daten zu laden

1. In der `App`-Komponente
   1. Erzeuge eine neue Instanz des `QueryClients`
   2. Integriere die `QueryClientProvider`-Komponente und weise ihr den `QueryClient` zu
2. In der `List`-Komponente
   1. Erzeuge API-Funktionen für das Laden und Löschen von Datensätzen
   2. Erzeuge eine Query für das Laden von Daten (`useQuery`)
   3. Behandle die Zustände `isLoading` und `isError`
   4. Zeige die Daten an
   5. Erzeuge eine Mutation für das Löschen von Daten und binde sie ein (`useMutation`)
   6. Nach erfolgreichem löschen, rufe die `queryClient.invalidateQueris`-Methode auf