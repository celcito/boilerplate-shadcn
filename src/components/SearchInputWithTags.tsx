
import { Tag, TagInput } from 'emblor';
import React from 'react';

//@ts-ignore
export const SearchInputWithTags = ({ field,setValue }) =>{

  const handleClearAllTags = () => {
    setTags([]);
    setValue('topics', []);
  };

    const [tags, setTags] = React.useState<Tag[]>([]);
    const [activeTagIndex, setActiveTagIndex] = React.useState<number | null>(null);

    const handleDeleteTag = (tagId:string) => {
        const newTags = tags.filter((tag) => tag.id !== tagId);
        setTags(newTags);
      };


      const handleOpenDiv = (tagId:string) => {
        console.log(`Abrindo div para tag com id ${tagId}`);

      };
    return (
      <div className='bg-gray-200 '>
     <TagInput
      {...field}
      placeholder="Digite uma item para pesquisar"
      tags={tags}
      styleClasses={{
    input: 'border border-gray-300 p-2',
    inlineTagsContainer: 'bg-gray-200 p-2 rounded',
    tagPopover: {
      popoverContent: 'bg-white shadow-lg',
      popoverTrigger: 'text-blue-500 hover:text-blue-600',
    },
    tagList: {
      container: 'bg-red-100',
      sortableList: 'p-1',
    },
    autoComplete: {
      command: 'bg-blue-100',
      popoverTrigger: 'bg-green-200',
      popoverContent: 'p-4',
      commandList: 'list-none',
      commandGroup: 'font-bold',
      commandItem: 'cursor-pointer hover:bg-gray-100',
    },
    tag: {
      body: 'flex items-center gap-2',
      closeButton: 'text-red-500 hover:text-red-600',
    },
    clearAllButton: 'text-red-500 hover:text-red-600',
  }}
      setTags={(newTags) => {
        setTags(newTags);
        setValue('topics', newTags as [Tag, ...Tag[]]);
      }}
      activeTagIndex={activeTagIndex}
      setActiveTagIndex={setActiveTagIndex}
      customTagRenderer = {
        (tag, isActiveTag) => (
          <div key={tag.id} className={`px-2 py-1 bg-red-500 rounded-full ${isActiveTag ? "ring-ring ring-offset-2 ring-2 ring-offset-background": ""}`}>
            <span style={{cursor:'pointer', width:'40px'}} className="ml-1 text-black text-sm" onClick={() => handleDeleteTag(tag.id)}>x</span>
            <span className="text-white text-sm mr-1">{tag.text}</span>
            <span style={{cursor:'pointer',width:'40px'}} className="ml-1 text-black text-sm" onClick={() => handleOpenDiv(tag.id)}>+</span>
          </div>
        )
      }
    />
    <button
    type="button"
    onClick={handleClearAllTags}
    className="text-red-500 hover:text-red-600 ml-2"
  >
    Limpar
  </button>
  </div>
)
}