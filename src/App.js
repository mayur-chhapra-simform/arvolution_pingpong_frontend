import React, { Suspense } from "react";
import "App.less";
import Routing from "Routing";
import Pageloader from "components/Global/Pageloader/Pageloader";

function App() {
  return (
    <Suspense fallback={<Pageloader />}>
      <Routing />
    </Suspense>
  );
}

export default App;
