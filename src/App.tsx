
import './App.css'


import { useFormik } from 'formik'

import {SearchInputWithTags} from './components/SearchInputWithTags'

function App() {

  const formik = useFormik({
    initialValues: {
      topics: [

        {
          "id": "4085461623",
          "text": "Sports"
      },
        {
          "id": "670410161",
          "text": "Programming"
      },
        {
          "id": "629288792",
          "text": "Travel"
      }

      ],
    },
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      setSubmitting(false);
    },
    enableReinitialize: true,
  });
  return (
    <>


    
    <form>
      <SearchInputWithTags field={formik} setValue={formik.setFieldValue} />
    </form>
    </>
  )
}

export default App


