<template>

  <div>
    <div class="modal" :class="{ 'is-active': isActive }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          Send Message
        </header>
        <section class="modal-card-body">
          <div class="field">
            <div class="control">
            <vue-tel-input v-model="number" v-bind="bindProps"  @input="onInput"></vue-tel-input>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="message" class="textarea"  placeholder="Enter Message"></textarea>
            </div>
          </div>
          <button @click="create" class="button is-primary is-pulled-right">Send</button>
        </section>
      </div>
      <button @click="toggle" class="modal-close is-large" aria-label="close"></button>
    </div>
    <button @click="toggle" class="button is-primary is-pulled-right">Send  Message</button>
    <br>
  </div>
</template>

<script>
import { sendmessage }  from '../repository'
import { VueTelInput } from 'vue-tel-input';
import VueSweetalert2 from 'vue-sweetalert2';
 
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
export default {
  name: 'CreateNoteModal',
  data(){
    return {
      number: '',
      message: '',
      isActive: false,
      activeCountry: { iso2: '' },
      bindProps: {
        defaultCountry: "IN",
        disabledFetchingCountry: false,
        disabled: false,
        disabledFormatting: false,
        placeholder: "Enter a phone number",
        required: true,
        enabledCountryCode: false,
        enabledFlags: true,
        preferredCountries: ["AU", "BR"],
        onlyCountries: [],
        ignoredCountries: [],
        autocomplete: "off",
        name: "telephone",
        maxLen: 25,
        wrapperClasses: "",
        inputClasses: "",
        mode: 'international',

       
      }

    }
  },
  methods: {

    create(){
      let data = { number: this.number, message: this.message }
      console.log(VueTelInput);    
        sendmessage(data)
        .then(data => {
          this.$emit('sendmessage', data.note);
          this.number = this.message = '';
          this.showAlert()
          this.toggle();
        })
        .catch(err => alert(err.message));
    },
    onInput(formattedNumber, { number, valid, country }) {
     this.number = number.e164;
    },
    toggle(){
      this.isActive = !this.isActive;
    },
  },
  showAlert() {
                // Use sweetalert2
                this.$swal('Hello Vue world!!!');
            },
  components: {
    VueTelInput,
  },
}
</script>