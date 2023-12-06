"use client";

import React, { useState } from "react";

export default function Home() {
  const [plaintext, setPlaintext] = useState("");
  const [key, setKey] = useState("");
  const [direction, setDirection] = useState("right"); // Added direction state
  const [encryptedResult, setEncryptedResult] = useState("");

  const encryptCaesarCipher = () => {
    // Check if plaintext, key, and direction are provided
    if (plaintext === "" || key === "") {
      alert("Please enter plaintext and key");
      return;
    }

    // Convert the key to a valid number
    const shift = parseInt(key, 10);

    // Validate if shift is a number
    if (isNaN(shift)) {
      alert("Please enter a valid number for the key");
      return;
    }

    // Perform Caesar Cipher encryption
    const result = Array.from(plaintext).map((char) => {
      let charCode = char.charCodeAt(0);

      if (char >= "a" && char <= "z") {
        if (direction === "left") {
          charCode = ((((charCode - 97 + shift) % 26) + 26) % 26) + 97;
        } else if (direction === "right") {
          charCode = ((((charCode - 97 - shift + 26 * 2) % 26) + 26) % 26) + 97;
        }
      } else if (char >= "A" && char <= "Z") {
        if (direction === "left") {
          charCode = ((((charCode - 65 + shift) % 26) + 26) % 26) + 65;
        } else if (direction === "right") {
          charCode = ((((charCode - 65 - shift + 26 * 2) % 26) + 26) % 26) + 65;
        }
      }

      return String.fromCharCode(charCode);
    });

    setEncryptedResult(result.join(""));
  };

  return (
    <div>
      <header class="text-gray-600 body-font bg-gray-100">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src="images/caesar.svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-1 rounded-full"
              viewBox="0 0 24 24"
            />
            <span class="ml-3 text-xl">Caesar Cipher Kalkulator</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="/dekripsi" class="mr-5 hover:text-gray-900">
              DEKRIPSI
            </a>
          </nav>
        </div>
      </header>

      <div>
        <section class="text-gray-600 body-font relative bg-white">
          <div class="container px-5 pt-10 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                ENKRIPSI
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Silahkan masukkan teks yang ingin dienkripsi beserta key Caesar
                Cipher yang diinginkan. Setelah itu, tekan tombol "ENKRIPSI"
                untuk mendapatkan hasil dari enkripsi teks tersebut.
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Plain Text
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={plaintext}
                      onChange={(e) => setPlaintext(e.target.value)}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Key
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={key}
                      onChange={(e) => setKey(e.target.value)}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                {/* Direction Dropdown */}
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="direction"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Direction
                    </label>
                    <select
                      id="direction"
                      name="direction"
                      value={direction}
                      onChange={(e) => setDirection(e.target.value)}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    >
                      <option value="right">Right</option>
                      <option value="left">Left</option>
                    </select>
                  </div>
                </div>

                <div className="w-full">
                  <button
                    onClick={encryptCaesarCipher}
                    className="flex my-10 mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-white-900"
                  >
                    ENKRIPSI
                  </button>
                </div>

                {/* Output Section */}
                <div className="p-2 py-4 w-full border-t border-gray-200 text-center flex flex-col gap-y-2">
                  <h2 className="text-2xl font-medium title-font text-gray-900">
                    Hasil Enkripsi (Cipher Teks):
                  </h2>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl font-medium title-font text-blue-600">
                    {encryptedResult}
                  </p>
                </div>

                <div className="px-10 pt-10 pb-5 w-full border-t border-gray-200 text-center">
                  <a className="text-indigo-500">
                    idabagusputra@students.undup.ac.id
                  </a>
                  <p className="leading-normal my-5">
                    Diponegoro University
                    <br />
                    Jl. Prof. Sudarto No.13, Tembalang, Kec. Tembalang, Kota
                    Semarang, Jawa Tengah 50275
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer class="text-gray-600 body-font bg-gray-100">
          <div class="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img
                src="images/caesar.svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10 text-white p-1 rounded-full"
                viewBox="0 0 24 24"
              />
              <span class="ml-3 text-xl">Kriptografi C</span>
            </a>
            <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
              Made by Ida Bagus Putu Putra Manuaba - 21120120140108
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a
                href="https://www.instagram.com/ida.bagus.putra"
                class="ml-3 text-gray-500"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
