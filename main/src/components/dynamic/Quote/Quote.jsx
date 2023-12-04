import Button from "../../../element/Button";
import SectionHeader from "../../shared/SectionHeader/SectionHeader";

const Quote = () => {
  return (
    <div>
      <div>
        <SectionHeader
          sectionHeaderContainerClassNames="mb-10"
          sectionHeaderHeadingClassNames="mb-4"
          sectionHeaderParagraphClassName="max-w-[400px]"
          title="Get A Quote"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the "
          headerDescription={true}
        />
      </div>
      <div>
        <div className="flex justify-start gap-5 mb-5  ">
          <input
            className="border-2 border-primary outline-none text-sm rounded bg-transparent px-2  pb-2 placeholder:font-karla w-[200px]"
            placeholder="Full Name"
            type="text"
          />
          <input
            className="border-2 border-primary outline-none text-sm rounded bg-transparent px-2  pb-2 placeholder:font-karla w-[200px]"
            placeholder="Email"
            type="email"
          />
        </div>
        <div className="flex justify-start gap-5 mb-5">
          <input
            className="border-2 border-primary outline-none text-sm rounded bg-transparent px-2  pb-2 placeholder:font-karla w-[200px]"
            placeholder="Phone Number"
            type="text"
          />
          <select className="bg-transparent border-2 focus:ring-primary focus:border-primary outline-none   border-primary text-sm rounded px-2 pb-2 placeholder:font-karla w-[200px]">
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div>
          <textarea
            placeholder="Message"
            className="bg-transparent border-2 focus:ring-primary focus:border-primary resize-none outline-none  border-primary text-sm rounded px-2 pt-2 placeholder:font-karla w-[420px] h-[150px]"
          ></textarea>
        </div>
        <div className="mt-4">
          <Button
            title="submit"
            className="bg-transparent text-primary border border-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default Quote;
