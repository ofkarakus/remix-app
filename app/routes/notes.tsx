import NewNote, { links as newNoteLinks } from "~/components/NewNote";

const NotesPage = () => {
  return (
    <main>
      <NewNote />
    </main>
  );
};

export function links() {
  return [...newNoteLinks()];
}

export default NotesPage;
