<template>
  <b-container class="activities">
    <b-form>
      <b-row>
        <b-col>
         <h4>You should:</h4>
         <b-form-textarea
            id="textarea"
            size="lg"
            :value="activity.name"
          ></b-form-textarea>
          <b-button block variant="danger">Button</b-button>
        </b-col>
        <b-col>
          <h4>Activity details:</h4>
           <b-form-group
            id="fieldset-1"
            label="Type"
            label-for="type"
          >
            <b-form-select :value='selectedType' :options="activity.type" id="type"></b-form-select>
          </b-form-group>
          <b-form-group
            id="fieldset-2"
            label="Participants"
            label-for="participants"
          >
            <b-form-input id="participants"></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldset-3"
            label="Budget"
            label-for="budget"
          >
            <b-form-input :min='0' :max='1' :type="'range'" id="budget"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>
  </b-container>
</template>

<script>
import api from '../api/Api';

export default {
  name: 'Activities',
  data() {
    return {
      activity: {
        activity: 'asd',
        type: ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"],
        participants: 0,
        price: 0,
      },
      selectedType: null,
    }
  },
  mounted() {
    this.axios.get(`${api}/activity`).then((response) => {
      console.log(response);
      this.selectedType = response.data.type;
    });
  },
};
</script>
