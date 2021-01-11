# BootstrapVueEsm
[**Bootstrap**](https://getbootstrap.com "Visit Bootstrap") 5.x + [**Vue**](https://vuejs.org "Visit Vue") 3.x - ESM Browser ([Download Vue.Esm-Browser 3.x](https://unpkg.com/vue@next/dist/vue.esm-browser.prod.js))

## Getting Started
The extension uses [**Maska**](https://github.com/beholdr/maska "Created By: beholdr") (required), so open BootstrapVueEsm.js and import it like:
```javascript
import { maska } from "./maska.esm.js";
```

Basic code (with Bootstrap 5.x, Vue.Esm-Browser 3.x and BootstrapVueEsm):
```html
<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="/BootstrapVueEsm.css">
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
  <title>Bootstrap 5.x +Vue 3.x - ESM Browser</title>
</head>
<body>
  
  <main id="app">  
    <Row class="gx-0">
      <Column :xs="12">Hello {{ who }}</Column>
    </Row>
  </main>
  
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js"></script>
  <script type="module">
    import { createApp, ref } from "/vue.esm-browser.prod.js";
    import BootstrapVueEsm from "/BootstrapVueEsm.js";

    const App = {
      setup() {
        const who = ref("world");
        return { who };
      },
    };

    const app = createApp(App);
    app.use(BootstrapVueEsm);
    app.mount("#app");
  </script>
</body>
</html>
```

## Components and props:
### Btn (Button)
- color ( also outline-* ): primary, secondary, success, danger, warning, info, light, dark;
- size: sm, lg;
- type: button, submit, link;
```html
<Btn color="primary">I'm a button!</Btn>
```
You can also add **Btngroup**, like:
```html
<Btngroup>
  <Btn color="primary">I'm a button!</Btn>
  <Btn color="primary">I'm a button!</Btn>
  <Btn color="primary">I'm a button!</Btn>
</Btngroup>
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

### Carousel
- id (required);
- indicators;
- controls;
- dark;
#### Carrouselitem
- src (required);
- active;
- captions;
- href;
- link (vue-router support);

```html
<Carousel id="carousel" indicators controls>
  <Carouselitem style="height: 500px;" src="#" active></Carouselitem>
  <Carouselitem style="height: 500px;" src="#"></Carouselitem>
  <Carouselitem style="height: 500px;" src="#" captions><h5>Some Text Inside</h5></Carouselitem>
</Carousel>
```

## Card
- img;
- title;
```html
<Card title="Title here...">Content...</Card>
```

## Popover
- content (required);
- placement: bottom (default), left, right;
- title;

```html
<Popover placement="right" title="it appears!" content="Hi, I'm a <b>Popover</b>">
  <h4>TAP ME</h4>
</Popover>
```

## Tooltip
- placement: bottom (default), left, right;
- title;

```html
<Tooltip placement="bottom" title="Today is <b>Friday</b>">
  <input type="text" class="form-control">
</Tooltip>
```

## Badge
- color: primary, secondary, success, danger, warning, info, light, dark;
```html
<Badge color="primary">New</Badge>
```

## Field
- size: sm, lg;
- type: text (default), password, number;
- float (Floating label types): in (default), out;
- label (required if float);
- mask: [See how works here](https://github.com/beholdr/maska);
- name (unique);
- disabled;
- readonly;
- autocomplete;
- placeholder;
- required;
- inputmode (mobile keyboard): text, numeric, decimal, tel, email, url, search;
```html
<!-- Name needs to be unique (is going to be a id attribute too) -->
<Field name="username" label="Full Name" v-model="inputText" :mask="'#####-###'" float="out"></Field>
```

## Fieldtext (Textarea)
- float (Floating label types): in (default), out;
- label (required if float);
- name (unique);
- rows;
- disabled;
- readonly;
- autocomplete;
- placeholder;
- required;
```html
<!-- Name needs to be unique (is going to be a id attribute too) -->
<Fieldtext label="Talk about your life:" name="textareaExample" v-model="textArea" float="in"></Fieldtext>
```

## Sel (Select) - **Not recommended yet**
- options: {content: "name &#60;b>with html&#60;/b>", val: "realValue"} (structure);
- name (unique);
- size: sm, lg;
- float (Floating label types): in (default), out;
- label (required if float);
- disabled;
- <s>required</s> (isn't working);

```html
<Sel
     label="SELECT ONE"
     name="select-example"
     float="out"
     v-model="getSelect"
     :options="[
        {content: 'Select...', val:'', disabled: true},
        {content: '<b>Option 1</b>', val: '1'},
        {content: 'Option 2', val: '2'}
     ]">
</Sel>
```

### Possible Select Solution:
```html
<!-- Basic -->
<label for="basicSelect" class="form-label">Works with selects</label>
<select class="form-select" id="basicSelect">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<!-- Float In -->
<div class="form-floating">
  <select class="form-select" id="floatingSelect">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <label for="floatingSelect">Works with selects</label>
</div>

<!-- Float Out -->
<label class="has-float-label">
  <select id="selExample" class="form-select vuejs-select">
    <option>Example</option>
  </select>
  <span>Choose one</span>
</label>
```
PS: Float Out has been created by [Anton Staroverov](https://github.com/tonycorporated/bootstrap-float-label)

## Multiple (Select Multiple)
- options: {content: "name &#60;b>with html&#60;/b>", val: "realValue"} (structure);
- name (unique);
- size: sm, lg;
- float (Floating label types): in (default), out;
- label (required if float);
- disabled;
- required;

```html
<Multiple
     label="SELECT ANY"
     name="select-multiple"
     float="out"
     v-model="getSelect"
     :options="[
        {content: 'Select...', val:'', disabled: true},
        {content: 'Option 1', val: '1'},
        {content: 'Option 2', val: '2'}
     ]">
</Multiple>
```

## Check (Checkbox, Switch, Radio)
- id (important but not required);
- type: checkbox (default), radio, switch, checkbox-inline, radio-inline, switch-inline;
- name (required);
- label;
- required;
- disabled;
- value (Radio only & required);

```html
<!-- Radio -->
<Check id="checkOne" name="radioUnique" v-model="checkRadio" type="radio-inline" value="0" disabled>Option 1</Check>
<Check name="radioUnique" v-model="checkRadio" type="radio-inline" value="1" label="Option 2"></Check>

<!-- Checkbox -->
<Check name="checkBox" v-model="checkTrueFalse" type="checkbox">I agree.</Check>

<!-- Switch -->
<Check name="switchCheck" v-model="checkTrueFalse" type="switch">I agree.</Check>
```

## Range
- name (unique);
- label;
- min;
- max;
- step;
- disabled;

```html
<Range name="oneName" v-model="range"></Range>
```
