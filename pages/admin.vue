<template>
    <div v-if="!is_exist_admin" class="new_admin_section">
      <div class="form_section">
        <h1 style="text-align: center;margin-bottom: 20px;">设置管理员账户</h1>
        <div class="login-row">
          <input v-model="username" autocomplete="off" type="text" :placeholder="`${$t('账号')}`" class="login-row-input">
        </div>
        <div class="login-row">
          <input v-model="password" autocomplete="off" type="password" :placeholder="`${$t('密码')}`" class="login-row-input">
        </div>
        <el-button @click="save_admin">节省</el-button>
      </div>
    </div>
    <div v-if="is_login_stage && is_exist_admin" class="new_admin_section">
      <div class="form_section">
        <h1 style="text-align: center;margin-bottom: 20px;">Login</h1>
        <div class="login-row">
          <input v-model="login_username" autocomplete="off" type="text" :placeholder="`${$t('账号')}`" class="login-row-input">
        </div>
        <div class="login-row">
          <input v-model="login_password" autocomplete="off" type="password" :placeholder="`${$t('密码')}`" class="login-row-input">
        </div>
        <el-button @click="login_admin">login</el-button>
      </div>
    </div>
    <div v-if="!is_login_stage">
        <h1 style="text-align: center;">Admin</h1>
        <el-table :data="saved_data.users" style="width: 700px;margin: 0 auto;">
            <el-table-column prop="username" label="Username" width="180" />
            <el-table-column prop="password" label="Password" width="180" />
            <el-table-column prop="timestamp" label="Timestamp" />
        </el-table>
    </div>
</template>
<script setup>
import { ElMessage, ElMessageBox } from 'element-plus'
const { locale, locales } = useI18n()
const { t } = useI18n()
definePageMeta({
    layout: 'login'
})
const username = ref('')
const password = ref('')
const is_login_stage = ref(true)
const login_username = ref('')
const login_password = ref('')
const login_admin = async () => {
  if(!login_username.value) 
    {
      ElMessage.error(t('Username cannot be empty.'))
        return
    }
    else if(!login_password.value) 
    {
      ElMessage.error(t('Password cannot be empty.'))
        return
    }
    const userData = {
        username: login_username.value,
        password: login_password.value,
    }
    get_data(userData)
}
const save_admin = async () => {
  if(!username.value) 
    {
      ElMessage.error(t('Username cannot be empty.'))
        return
    }
    else if(!password.value) 
    {
      ElMessage.error(t('Password cannot be empty.'))
        return
    }
  try {
    const response = await fetch('/set_up_admin.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value
      })
    });

    // Check if the response is successful
    if (!response.ok) {
      const result_error = await response.json();
      ElMessage.error(t('Failed to save admin: ' + result_error.message))
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON response
    const result = await response.json();

    // Log the result
    console.log('Response from server:', result);

    if (result.success) {
        check_admin()
        console.log('Save admin successful:');
        is_login_stage.value = true
    } else {
      ElMessage.error(t('Failed to save admin: ' + result.message))
      console.log('Failed to save admin: ' + result.message);
    }
  } catch (error) {
    console.error('Error:', error);
    console.log('An error occurred while saving the admin');
  }
};
// fetch('/user_api.php', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(userData)
//     });
const is_exist_admin = ref(true)
const check_admin = async () => {
    fetch('/check_admin.php')
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data)
    if (data.exists) {
        is_exist_admin.value = true
    } else {
        is_exist_admin.value = false
    }
  })
  .catch(error => console.error('Fetch error:', error));
}
check_admin()

const saved_data = ref([])
const get_data = async (data) => {
    fetch('/get_user_api.php',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  .then(response => {
    //console.log(response)
    return response.json()
  })
  .then(data => {
    if (data.success) {
        saved_data.value=data.data
        is_login_stage.value = false
      //console.log('Data:', saved_data.value);
    } else {
      if(data.message === 'Access denied') {
        ElMessage.error('Access denied')
        is_login_stage.value = true
      }
      console.error('Error:', data.message);
    }
  })
  .catch(error => console.error('Fetch error:', error));
}
// get_data()
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
.login-row{
        display: flex;
        background-color: #fff;
        -webkit-box-align: center;
        align-items: center;
        height: 42px;
        border-radius: 4px;
        margin-bottom: 15px;
        @include respond(phone){
            height: 40px;
            margin-bottom: 17px;
        }
    }
    .login-row-input{
        display: inline-block;
        border: none;
        outline: none;
        font-size: 16px;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        height: 32px;
        line-height: 32px;
        width: 100%;
        color: #1f2d3d;
        padding: 0 15px;
        &::placeholder{
            color: #999;
        }
        @include respond(phone){
            height: 30px;
            font-size: 14px;
            padding: 0 9px;
        }
    }
.new_admin_section {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 600px;
  margin-top: 20px;
  color: #000;
  .form_section {
    background-color: #e8f7ff;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
