<template>
    <router-link
    :to="`/project/${id}`"
    class="rounded-[10px] border border-gray-200 bg-white px-4 pt-12 pb-4"
    >
  <time datetime="2025-7-7" class="block text-xs text-gray-500"> {{ date }}</time>

    <h3 class="mt-1 text-lg font-medium text-gray-900">
      {{ title }}
    </h3>

  <div class="mt-4 flex flex-wrap gap-1">
    <span v-for="(keyword,index) in keyWords" :key="index"
      class="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs whitespace-nowrap text-purple-600"
    >
      {{keyword}}
    </span>

    
  </div>
</router-link>

</template>
<script>
import { useRouter } from 'vue-router';
import moment from 'moment';


export default {
    name: "ProjectCard",

    props: ({
    id: {
        type: String,
        default: ""
    },
    date: {
        type: String,
        default: "2025-10-10"
    },
    title: {
        type: String,
        default: "How to center an element using JavaScript and jQuery"
    },
    keyWords: {
        type: Array,
        default: () => ["C++", "JavaScript", "HTML"]
    }
}),
computed: {
    formatedDate() {
        return moment(this.date).format('LL');
    }
},

methods: {
    handleClick() {
        router.push(`/project/${this.id}`);
    }
}
}
</script>