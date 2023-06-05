import React from 'react'

const Faq = () => {
  return (
    <section className='flex flex-col gap-8 mt-24 items-center justify-center'>
        <div className='flex flex-col gap-[16px] items-center justify-center text-center'>
            <h3 className='section_title text-center'>
                Frequent ask qustions
            </h3>
            <p className='font-normal text-lg capitalize text-white text-center'>
                Pellentesque cras adipiscing tempus libero vel nullam mauris tellus. Aliquam ultrices tellus consequat amet, lectus aliquam est in neque.
            </p>
        </div>

        {/* faq list  */}
        <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
          <div class="py-5 w-full sm:w-[400px] md:min-w-[576px]">
            <details class="group">
              <summary class="flex justify-between text-white items-center cursor-pointer list-none">
                <span className='text-lg font-medium'> What is a SAAS platform?</span>
                <span class="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p class="text-gray-300 text-sm font-normal mt-3 group-open:animate-fadeIn">
                SAAS platform is a cloud-based software service that allows users to access
                and use a variety of tools and functionality.
              </p>
            </details>
          </div>
          <div class="py-5 w-full min-w-[400px] sm:w-[450px] md:min-w-[576px]">
            <details class="group">
              <summary class="flex justify-between text-white items-center cursor-pointer list-none">
                <span className='text-lg font-medium'> What is a SAAS platform?</span>
                <span class="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p class="text-gray-300 text-sm font-normal mt-3 group-open:animate-fadeIn">
                SAAS platform is a cloud-based software service that allows users to access
                and use a variety of tools and functionality.
              </p>
            </details>
          </div>
          <div class="py-5 w-full sm:w-[400px] md:min-w-[576px]">
            <details class="group">
              <summary class="flex justify-between text-white items-center cursor-pointer list-none">
                <span className='text-lg font-medium'> What is a SAAS platform?</span>
                <span class="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p class="text-gray-300 text-sm font-normal mt-3 group-open:animate-fadeIn">
                SAAS platform is a cloud-based software service that allows users to access
                and use a variety of tools and functionality.
              </p>
            </details>
          </div>
        </div>
    </section>
  )
}

export default Faq