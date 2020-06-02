<template>
  <div>
    <h4 v-if="this.activities.length === 0">There are no activities</h4>
    <div v-else>
      <b-table small :fields="fields" :items="activities" responsive="sm">
        <template v-slot:cell(#)="data">
          {{ data.index + 1 }}
        </template>
        <template v-slot:cell()="data">
          <i>{{ data.value }}</i>
        </template>
         <template v-slot:cell(action)="row">
          <b-button size="sm" variant="danger" class="mb-2">
            <b-icon @click="deleteRow(row.item)" icon="trash-fill" aria-label="Delete"></b-icon>
          </b-button>
        </template>
      </b-table>
      <b-button @click="deleteAll" block variant="danger">Delete all activites</b-button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'


export default {
  data() {
    return {
      fields: [
        '#',
        'activity',
        'participants',
        'price',
        'action'
      ],
    };
  },
  computed:{
    ...mapGetters({
        'activities': 'getActivities'
      }),
  },
  methods: {
    ...mapActions(['deleteActivity','deleteAllActivites']),
    deleteRow(activity) {
      this.deleteActivity(activity);
    },
    deleteAll(){
      this.deleteAllActivites();
    }
  }
};
</script>
