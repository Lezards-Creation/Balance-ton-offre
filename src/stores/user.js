import { defineStore } from 'pinia'
import axios from 'axios'
export const useUser = defineStore({
      id: 'user',
      state: () => ({
            user: null,
            connected: false,
      }),
      getters: {},
      actions: {
            connect(payload) {
                  return new Promise((resolve, reject) => {
                        axios({
                              method: 'POST',
                              url: `${import.meta.env.VITE_API_URL}/login`,
                              params: {
                                    username: payload.username.value,
                                    password: payload.password.value,
                                    remember: 1,
                              },
                        })
                              .then(({ data }) => {
                                    if (data.respond) {
                                          this.user = data.result[0]
                                          this.connected = true
                                          resolve(data.result[0])
                                    } else {
                                          resolve(false)
                                    }
                              })
                              .catch((err) => {
                                    reject(err)
                              })
                  })
            },
      },
})
