# BootstrapVueEsm
[**Bootstrap**](https://getbootstrap.com "Visit Bootstrap") 5.x + [**Vue**](https://vuejs.org "Visit Vue") 3.x - ESM Browser

## Getting Started
This extension uses [**Maska**](https://github.com/beholdr/maska "Created By: beholdr") (required), so open vue-bootstrap.js and import it like:
```javascript
import { maska } from "./maska.esm.js";
```

Basic Code (with Bootstrap, Vue.Esm and BootstrapVueEsm):
```html
<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="/Bootstrap-extend.css">
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
  <title>Bootstrap 5.x +Vue 3.x - ESM Browser</title>
</head>
<body>
  
  <main id="app">  
    <Row>
      <Column :xs="12">Hello {{ who }}</Column>
    </Row>
  </main>
  
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js"></script>
  <script type="module">
    import { createApp, ref } from "/vue.js";
    import Bootstrap from "/vue-bootstrap.js";

    const App = {
      setup() {
        const who = ref("world");
        return { who };
      },
    };

    const app = createApp(App);
    app.use(Bootstrap);
    app.mount("#app");
  </script>
</body>
</html>
```

## Components and props:
### Btn (buttons)
- color ( also outline-* ): primary, secondary, success, danger, warning, info, light, dark;
- size: sm, lg;
- type: button, submit, link;
```html
<Btn color="primary">I'm a button!</Btn>
```

### Modal (Dialog)
- position: center;
```html
<Transition name="fade">
  <Modal v-if="showModal">
    <Modalheader title="Error!">
      <Btn color="close" @click="showModal=!showModal"></Btn>
    </Modalheader>
    <Modalbody>Modal Content...</Modalbody>
    <Modalfooter>
      <Btn color="secondary" @click="showModal=!showModal">Close</Btn>
    </Modalfooter>
  </Modal>
</Transition>
```

### Alert
- title;
- color: primary, secondary, success, danger, warning, info, light, dark;
```html
<Transition name="fade">
  <Alert v-if="showAlert" title="Error!" color="danger" class="position-fixed" style="top:15px;left:15px;">
    <Btn color="close" @click="showAlert=!showAlert"></Btn>
    <strong>This is</strong> what happened!
  </Alert>
</Transition>
```

### Grids (Row, Column, Container)
#### Container
- size: sm, md, lg, xl, xxl, fluid;
#### Column
xs,sm,md,lg,xl,xxl: 1,2,3,4,5,6,7,8,9,10,11,12;
#### Row: Does not have properties
```html
<Container>
  <Row class="my-3">
    <Column :xs="12" :sm="12" :md="12" :lg="12" :xl="12" :xxl="12">
      Some content here...
    </Column>
  </Row>
</Container>
```
