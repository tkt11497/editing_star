<template>
    <div>
        <h1 style="text-align: center;">Admin</h1>
        <el-table :data="saved_data.users" style="width: 700px;margin: 0 auto;">
            <el-table-column prop="username" label="Username" width="180" />
            <el-table-column prop="password" label="Password" width="180" />
            <el-table-column prop="timestamp" label="Timestamp" />
        </el-table>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'login'
})
const saved_data = ref([])
const get_data = async () => {
    fetch('/get_user_api.php')
  .then(response => response.json())
  .then(data => {
    if (data.success) {
        saved_data.value=data.data
      console.log('Data:', saved_data.value);
    } else {
      console.error('Error:', data.message);
    }
  })
  .catch(error => console.error('Fetch error:', error));
}
get_data()
// const getDataFromFirestore = async () => {
//   try {
//     const response = await fetch(
//       `https://firestore.googleapis.com/v1/projects/syaxin-e4108/databases/(default)/documents/users`,
//       {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }
//     );

//     const result = await response.json();
//     console.log("Fetched data: ", result);
//   } catch (error) {
//     console.error("Error fetching data: ", error);
//   }
// };

// Call the function to fetch data
// getDataFromFirestore();
</script>
<style scoped lang="scss">
</style>
