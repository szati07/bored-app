<template>
  <b-container class="activities">
    <b-form>
      <b-row>
        <b-col>
         <h4>You should:</h4>
         <b-form-textarea
            id="textarea"
            size="lg"
            :value="activity.activity"
            no-resize
            rows="7"
          ></b-form-textarea>
          <b-button @click="saveActivity" block variant="danger">Save for later</b-button>
        </b-col>
        <b-col>
          <h4>Activity details:</h4>
           <b-form-group
            id="fieldset-1"
            label="Type"
            label-for="type"
          >
            <b-form-select @change="this.onTypeChange" :value='activity.type' :options="types" id="type"></b-form-select>
          </b-form-group>
          <b-form-group
            id="fieldset-2"
            label="Participants"
            label-for="participants"
          >
            <b-form-input :min='0' @change="onParticipantsChange" :type="'number'" :value="activity.participants" id="participants"></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldset-3"
            label="Budget"
            label-for="budget"
          >
            <b-form-input @change="onPriceChange" :value="activity.price" :step='0.05' :min='0' :max='1' :type="'range'" id="budget"></b-form-input>
          </b-form-group>
          <b-button @click="getNewActivity" block variant="primary">Hit me with a new one!</b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-container>
</template>

<script>
import api from '../api/Api';
import {mapActions} from 'vuex';
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'Activities',
  data() {
    return {
      activity: {
        activity: '',
        type: null,
        participants: 0,
        price: 0,
        id: null,
      },
      types: ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"],
    }
  },
  mounted() {
    this.getRandomActivity();
  },
  methods: {
    ...mapActions(['addActivity']),
    getRandomActivity(){
      this.axios
        .get(`${api}/activity`).then((response) => {
          const {
              activity,
              type,
              participants,
              price,
            } = response.data;

            this.activity = {
              activity,
              type,
              participants,
              price,
              id: uuidv4()
            }
        })
    },
    onTypeChange(e){
       this.axios
        .get(`${api}/activity?type=${e}`)
        .then((response) => {
          if(!response.data.error) {
            const {
              activity,
              type,
              participants,
              price,
            } = response.data;

            this.activity = {
              activity,
              type,
              participants,
              price,
              id: uuidv4()
            }
            return;
          }
          this.activity = {activity: response.data.error, ...response}
        });
    },
    onParticipantsChange(participants){
      this.axios
        .get(`${api}/activity?participants=${participants}`)
        .then((response) => {
          console.log(response);
          if(!response.data.error) {
            const {
              activity,
              type,
              participants,
              price,
            } = response.data;

            this.activity = {
              activity,
              type,
              participants,
              price,
              id: uuidv4()
            }
            return;
          }
          this.activity = {activity: response.data.error, ...response}
        });
    },
    onPriceChange(price){
      this.axios
        .get(`${api}/activity?price=${price}`)
        .then((response) => {
          console.log(response);
          if(!response.data.error) {
            const {
              activity,
              type,
              participants,
              price,
            } = response.data;

            this.activity = {
              activity,
              type,
              participants,
              price,
              id: uuidv4()
            }
            return;
          }
          this.activity = {activity: response.data.error, ...response}
        });
    },
    getNewActivity(){
      const {
        activity,
        type,
        participants,
        price
      } = this.activity;

      this.axios
        .get(`${api}/activity?activity=${activity}&type=${type}&participants=${participants}&price=${price}`)
        .then((response) => {
          if(!response.data.error) {
            const {
              activity,
              type,
              participants,
              price,
            } = response.data;

            this.activity = {
              activity,
              type,
              participants,
              price,
              id: uuidv4(),
            }
            return;
          }
          this.activity = {activity: response.data.error, ...response}
        });
    },
    saveActivity(){
      this.addActivity(this.activity)
    }
  },
};
</script>
