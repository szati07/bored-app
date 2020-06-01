<template>
  <div>
    <b-table small :fields="fields" :items="items" responsive="sm">
      <template v-slot:cell(#)="data">
        {{ data.index + 1 }}
      </template>
      <template v-slot:cell()="data">
        <i>{{ data.value }}</i>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        '#',
        'activity',
        'participants',
        'budget',
      ],
      items: [
        { activity: 'First sample', participants: 1, budget: 'cheap' },
        { activity: 'Secoind sample', participants: 1, budget: 'cheap' },
        { activity: 'Thirds sample', participants: 1, budget: 'cheap' },
      ],
    };
  },
};
</script>
