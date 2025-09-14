<template>
    <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <!-- <li v-for="(project,index) in projects" :key="index" >
       <ProjectCard :title="project.title" :date="project.date" :keyWords="project.keyWords" :id="project.id" />
      </li> -->
      <li v-for="(item,index) in repositories" :key="index" >
       <ProjectCard :title="item.full_name" :date="item.created_at" :keyWords="item.topics" :id="item.name" />
      </li>
    </ul>
</template>
<script>
import ProjectCard from "./ProjectCard.vue";
import { useRepositoriesStore } from "@/stores/repositories";
import { mapState } from "pinia";
import { mapActions } from "pinia";
export default {

    name: "Collection",
    components: {
        ProjectCard,
    },
    async mounted() {
        await this.fetchRepository()
    },
    computed: {
        ...mapState(useRepositoriesStore, ['repositories'])
    },
    methods: {
        ...mapActions(useRepositoriesStore, ['fetchRepository'])
    },
    
    
    // data(){
    //     return {
    //         projects: this.repositories,
    //             {
    //                 id: '1dsfdsafsfdsa',
    //                 title: "How to center an element using JavaScript",
    //                 date: "2025-10-10",
    //                 keyWords: ["JavaScript", "jQuery", "Snippet"],
    //             },
    //             {
    //                 id: '2dsfdsafsfdsa',
    //                 title: "How to center an element using HTML",
    //                 date: "2025-15-10",
    //                 keyWords: ["Python", "jQuery", "HTML"],
    //             },
    //             {
    //                 id: '3dsfdsafsfdsa',
    //                 title: "How to center an element using CSS",
    //                 date: "2025-10-20",
    //                 keyWords: ["CSS", "jQuery", "HTML"],
    //             },
    //             {
    //                 id: '4dsfdsafsfdsa',
    //                 title: "How to center an element using Python",
    //                 date: "2025-9-10",
    //                 keyWords: ["Python", "jQuery", "HTML"],
    //             }
    //         ]
    //     }
    // }
}
</script>