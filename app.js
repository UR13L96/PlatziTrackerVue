new Vue({
    el: "#app",
    data() {
        return {
            courses: [],
            title: "",
            time: ""
        }
    },
    methods: {
        addCourse() {
            if (this.time !== "" && this.title !== "") {
                this.courses.push({
                    title: this.title,
                    time: this.time * 1
                })

                this.title = ""
                this.time = ""
            }
        },
        removeCourseAt(i) {
            this.courses.splice(i, 1)
        }
    },
    computed: {
        totalTime() {
            var totalTime = 0
            this.courses.forEach(course => totalTime += course.time)

            return totalTime
        }
    }
})